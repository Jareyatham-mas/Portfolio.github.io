import {
  Building2,
  GraduationCap,
  HeartHandshake,
  Workflow,
} from "lucide-react";
import { usePreferences } from "../context";
import { experiences } from "../data/experience";
import { ConnectBand, PageHeading } from "../components/UI";
import Gallery from "../components/Gallery";
const icons = [GraduationCap, Workflow, Building2, HeartHandshake];
export default function Experience() {
  const { t, locale } = usePreferences();
  return (
    <div className="container interior-page">
      <PageHeading {...t.experience} />
      <div className="experience-timeline">
        {experiences.map((e, i) => {
          const Icon = icons[i];
          return (
            <article key={e.id} className="experience-entry" data-reveal>
              <div className="timeline-marker">
                <Icon size={21} />
              </div>
              <div className="experience-category">
                <span className="section-number mono">0{i + 1} /</span>
                <span>{e.category[locale]}</span>
              </div>
              <div className="experience-body">
                <h2>{e.title[locale]}</h2>
                <div className="organizations">
                  {e.organizations.map((o) => (
                    <div key={o.name.en}>
                      <h3>{o.name[locale]}</h3>
                      <p>{o.role[locale]}</p>
                      {o.period && (
                        <span className="period mono">{o.period[locale]}</span>
                      )}
                    </div>
                  ))}
                </div>
                <ul>
                  {e.details.map((d, j) => (
                    <li key={j}>{d[locale]}</li>
                  ))}
                </ul>
                <Gallery images={e.images} title={e.title[locale]} />
              </div>
            </article>
          );
        })}
      </div>
      <ConnectBand />
    </div>
  );
}
