import type { Localized } from "../context";
export const projectCategories = [
  { id: "web", label: { th: "เว็บแอปพลิเคชัน", en: "Web Application" } },
  { id: "fullstack", label: { th: "Full-Stack", en: "Full-Stack" } },
  { id: "backend", label: { th: "Backend", en: "Backend" } },
  { id: "automation", label: { th: "ระบบอัตโนมัติ", en: "Automation" } },
  { id: "ai", label: { th: "AI", en: "AI" } },
  { id: "data", label: { th: "ข้อมูล", en: "Data" } },
  { id: "other", label: { th: "อื่น ๆ", en: "Other" } },
] as const;
export type ProjectCategory = (typeof projectCategories)[number]["id"];
export type Project = {
  id: string;
  slug: string;
  name: Localized;
  description: Localized;
  role: Localized;
  stack: string[];
  categories: ProjectCategory[];
  year?: number;
  cover?: { src: string; alt: Localized };
  github?: string;
  demo?: string;
  detailUrl?: string;
};
// Add reviewed projects here. No fictional portfolio entries are shipped.
export const projects: Project[] = [];
export function filterProjects(items: Project[], category: string) {
  return category === "all"
    ? items
    : items.filter((p) => p.categories.some((c) => c === category));
}
