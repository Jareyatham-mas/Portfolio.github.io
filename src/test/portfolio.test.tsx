import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import type { ReactNode } from "react";
import { PreferencesProvider, usePreferences } from "../context";
import { th } from "../translations/th";
import { en } from "../translations/en";
import { filterProjects, projects } from "../data/projects";
import type { Project } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Gallery from "../components/Gallery";
import Resume from "../pages/Resume";
import Tools from "../pages/Tools";
import Home from "../pages/Home";
import { defaultResume, resumes } from "../data/resume";
vi.mock('../components/Rainforest', () => ({ default: () => null }));
const wrap = (ui: ReactNode) =>
  render(
    <MemoryRouter>
      <PreferencesProvider>{ui}</PreferencesProvider>
    </MemoryRouter>,
  );
const project: Project = {
  id: "test",
  slug: "test-project",
  name: { th: "ทดสอบ", en: "Test project" },
  description: { th: "รายละเอียด", en: "Description" },
  role: { th: "นักพัฒนา", en: "Developer" },
  categories: ["backend", "fullstack"],
  stack: ["Node.js"],
};
function PreferenceProbe() {
  const { locale, setLocale, theme, toggleTheme } = usePreferences();
  return (
    <>
      <button onClick={() => setLocale(locale === "th" ? "en" : "th")}>
        {locale}
      </button>
      <button onClick={toggleTheme}>{theme}</button>
    </>
  );
}
describe("content and extensibility", () => {
  it("shows newly added projects on Home without changing page components", () => {
    projects.push(project);
    try {
      wrap(<Home />);
      expect(screen.getByRole('heading', { name: 'ทดสอบ' })).toBeVisible();
      expect(screen.getByText('รายละเอียด')).toBeVisible();
    } finally {
      projects.pop();
    }
  });
  it("has matching nonempty translation keys in both languages", () => {
    for (const key of Object.keys(th) as (keyof typeof th)[]) {
      if (typeof th[key] === "string") {
        expect(en[key]).toBeTruthy();
        continue;
      }
      expect(Object.keys(en[key])).toEqual(Object.keys(th[key]));
      for (const value of Object.values(en[key]))
        expect(value.length).toBeGreaterThan(0);
    }
  });
  it("filters multi-category projects and handles empty/unknown categories", () => {
    const items = [
      project,
      {
        ...project,
        id: "ai",
        categories: ["ai"] as const,
      } as unknown as Project,
    ];
    expect(filterProjects(items, "all")).toHaveLength(2);
    expect(filterProjects(items, "backend")).toEqual([project]);
    expect(filterProjects(items, "fullstack")).toEqual([project]);
    expect(filterProjects(items, "data")).toHaveLength(0);
    expect(filterProjects([], "all")).toHaveLength(0);
  });
  it("renders a project without inventing a year, image or broken links", () => {
    const { container } = wrap(<ProjectCard project={project} index={0} />);
    expect(screen.getByRole("heading", { name: "ทดสอบ" })).toBeVisible();
    expect(container.querySelectorAll("a,img")).toHaveLength(0);
  });
  it("renders available project URLs and language-specific descriptions", () => {
    document.documentElement.lang = "en";
    wrap(
      <ProjectCard
        project={{
          ...project,
          github: "https://github.com/example/test",
          demo: "https://example.com",
          cover: {
            src: "/images/test.webp",
            alt: { th: "ภาพโปรเจกต์", en: "Project cover" },
          },
        }}
        index={0}
      />,
    );
    expect(screen.getByText("Description")).toBeVisible();
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Project cover");
    for (const link of screen.getAllByRole("link")) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
describe("preferences and tools", () => {
  it("persists language and theme and updates the document", () => {
    wrap(<PreferenceProbe />);
    fireEvent.click(screen.getByRole("button", { name: "th" }));
    fireEvent.click(screen.getByRole("button", { name: "light" }));
    expect(document.documentElement.lang).toBe("en");
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("rainforest-locale")).toBe("en");
    expect(localStorage.getItem("rainforest-theme")).toBe("dark");
  });
  it("works when browser storage is blocked", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    wrap(<PreferenceProbe />);
    fireEvent.click(screen.getByRole("button", { name: "light" }));
    expect(screen.getByRole("button", { name: "dark" })).toBeVisible();
  });
  it("filters the 23 tools and keeps all descriptions visible on touch", () => {
    wrap(<Tools />);
    expect(screen.getAllByRole("article")).toHaveLength(23);
    fireEvent.click(screen.getByRole("button", { name: "การทดสอบและ API" }));
    expect(screen.getAllByRole("article")).toHaveLength(5);
    expect(screen.getByRole("heading", { name: "Postman" })).toBeVisible();
    expect(
      screen.queryByRole("heading", { name: "React" }),
    ).not.toBeInTheDocument();
  });
});
describe("resume availability", () => {
  it("uses the configured Thai PDF on Home and removes downloads when none exist", () => {
    const original = { ...resumes };
    try {
      resumes.th = { path: '/resume/actual-th.pdf', preview: '/resume/th.webp', pages: 1 };
      const { container, rerender } = wrap(<Home />);
      expect(container.querySelector('a[download]')).toHaveAttribute('href', '/resume/actual-th.pdf');
      resumes.th = null;
      resumes.en = null;
      rerender(<MemoryRouter><PreferencesProvider><Home /></PreferencesProvider></MemoryRouter>);
      expect(container.querySelector('a[download]')).toBeNull();
      expect(screen.getByRole('link', { name: th.nav.resume })).toHaveAttribute('href', '/resume');
    } finally {
      Object.assign(resumes, original);
    }
  });
  it("selects the available document with sensible fallback", () => {
    expect(defaultResume("th")).toBe("en");
    expect(
      defaultResume("th", {
        th: { path: "th.pdf", preview: "th.webp", pages: 1 },
        en: null,
      }),
    ).toBe("th");
    expect(defaultResume("en", { th: null, en: null })).toBe("th");
  });
  it("shows the supplied English PDF and no dead link on unavailable Thai", () => {
    const { container } = wrap(<Resume />);
    expect(container.querySelector("a[download]")).toHaveAttribute(
      "href",
      "/resume/jareyatham-masong-en.pdf",
    );
    fireEvent.click(screen.getByRole("button", { name: /เรซูเม่ภาษาไทย/ }));
    expect(screen.getByRole("status")).toHaveTextContent("กำลังเตรียมเรซูเม่");
    expect(container.querySelector("a[download]")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "เรซูเม่ภาษาอังกฤษ" }));
    expect(container.querySelector("a[download]")).not.toBeNull();
  });
});
describe("experience gallery", () => {
  it("renders no placeholder for an experience without images", () => {
    const { container } = wrap(<Gallery images={[]} title="Workshop" />);
    expect(container).toBeEmptyDOMElement();
  });
  it("opens, cycles, closes, and returns focus to its trigger", () => {
    const imgs = [
      { src: "/one.webp", alt: { th: "รูปหนึ่ง", en: "One" } },
      { src: "/two.webp", alt: { th: "รูปสอง", en: "Two" } },
    ];
    wrap(<Gallery images={imgs} title="Workshop" />);
    const trigger = screen.getByRole("button", {
      name: "เปิดรูปกิจกรรม: รูปหนึ่ง",
    });
    trigger.focus();
    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByRole("img")).toHaveAttribute("src", "/one.webp");
    fireEvent.keyDown(dialog, { key: "ArrowRight" });
    expect(within(dialog).getByRole("img")).toHaveAttribute("src", "/two.webp");
    fireEvent.keyDown(dialog, { key: "ArrowRight" });
    expect(within(dialog).getByRole("img")).toHaveAttribute("src", "/one.webp");
    fireEvent(
      dialog,
      new Event("cancel", { bubbles: false, cancelable: true }),
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(document.body.style.overflow).toBe("");
  });
});
