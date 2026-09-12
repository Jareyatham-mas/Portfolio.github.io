import { Code2, GraduationCap, ScanLine, Sparkles } from "lucide-react";
import { usePreferences } from "../context";
import { aboutContent, currentFocus } from "../data/about";
import { education } from "../data/education";
import { ConnectBand, PageHeading } from "../components/UI";
import { publicAsset } from "../lib/public-asset";
export default function About() {
  const { t, locale } = usePreferences();
  return (
    <div className="container interior-page">
      <PageHeading
        {...{
          eyebrow: t.about.eyebrow,
          title: t.about.title,
          lead: t.about.lead,
        }}
      />
      <div className="about-layout">
        <aside className="about-sidebar">
          <div className="identity-card">
            <img
              src={publicAsset("/images/profile.png")}
              width="230"
              height="225"
              alt={t.name}
            />
            <h2>{t.name}</h2>
            <p>Computer Science Student</p>
            <span className="eyebrow">SRIPATUM UNIVERSITY</span>
          </div>
          <nav aria-label={t.nav.about}>
            {(["who", "goals", "focus", "education", "beyond"] as const).map(
              (key, i) => (
                <a href={`#${key}`} key={key}>
                  <span className="mono">0{i + 1}</span>
                  {t.about[key]}
                </a>
              ),
            )}
          </nav>
        </aside>
        <div className="about-content">
          {(["who", "goals"] as const).map((key, i) => (
            <section id={key} className="content-section" key={key} data-reveal>
              <span className="section-number mono">0{i + 1} /</span>
              <h2>{t.about[key]}</h2>
              {aboutContent[key].map((p, j) => (
                <p key={j}>{p[locale]}</p>
              ))}
            </section>
          ))}
          <section className="content-section" id="focus" data-reveal>
            <span className="section-number mono">03 /</span>
            <h2>{t.about.focus}</h2>
            <div className="focus-tags">
              {currentFocus.map((s) => (
                <span key={s}>
                  <Code2 size={14} />
                  {s}
                </span>
              ))}
            </div>
            <p>{t.about.focusText}</p>
          </section>
          <section className="content-section" id="education" data-reveal>
            <span className="section-number mono">04 /</span>
            <h2>{t.about.education}</h2>
            {education.map((e) => (
              <article className="education-entry" key={e.id}>
                <GraduationCap size={24} />
                <div>
                  <span className="eyebrow">
                    {e.from} — {e.to ?? t.about.present}
                  </span>
                  <h3>{e.degree[locale]}</h3>
                  <p>{e.institution[locale]}</p>
                  <div className="education-meta">
                    <span>
                      GPAX <strong>{e.gpax}</strong>
                    </span>
                    {e.semesters && <span>{t.about.semesters}</span>}
                  </div>
                </div>
              </article>
            ))}
          </section>
          <section className="content-section" id="beyond" data-reveal>
            <span className="section-number mono">05 /</span>
            <h2>{t.about.beyond}</h2>
            <div className="hobby-tags">
              <span>
                <ScanLine size={17} />
                {locale === "th" ? "แบดมินตัน" : "Badminton"}
              </span>
              <span>
                <Sparkles size={17} />
                {locale === "th" ? "น้ำหอม" : "Fragrances"}
              </span>
              <span>
                <Code2 size={17} />
                {locale === "th" ? "เทคโนโลยี" : "Technology"}
              </span>
            </div>
            {aboutContent.beyond.map((p, i) => (
              <p key={i}>{p[locale]}</p>
            ))}
          </section>
        </div>
      </div>
      <ConnectBand />
    </div>
  );
}
