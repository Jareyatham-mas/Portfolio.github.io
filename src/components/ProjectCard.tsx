import { ArrowUpRight, Code2, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { usePreferences } from "../context";
import type { Project } from "../data/projects";
import { useRef } from 'react';
import type { PointerEvent } from 'react';
import { publicAsset } from "../lib/public-asset";
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { t, locale } = usePreferences();
  const cover = useRef<HTMLDivElement>(null);
  const tilt = (e: PointerEvent<HTMLDivElement>) => {
    if(e.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches || innerWidth < 1024)return;
    const rect=e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.transform=`perspective(900px) rotateX(${-(e.clientY-rect.top-rect.height/2)/rect.height*3}deg) rotateY(${(e.clientX-rect.left-rect.width/2)/rect.width*3}deg)`;
  };
  return (
    <article className={`project-card project-card-${index % 3}`} data-reveal>
      <div className="project-cover" ref={cover} onPointerMove={tilt} onPointerLeave={()=>{if(cover.current)cover.current.style.transform='';}}>
        {project.cover ? (
          <img
            src={publicAsset(project.cover.src)}
            alt={project.cover.alt[locale]}
            width="900"
            height="640"
            loading="lazy"
          />
        ) : (
          <div className="project-cover-empty" aria-hidden="true">
            <Code2 size={60} strokeWidth={1} />
          </div>
        )}
        <span className="project-index mono">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="project-card-meta">
        <span className="eyebrow">{project.role[locale]}</span>
        {project.year && <span className="mono">{project.year}</span>}
      </div>
      <h2>{project.name[locale]}</h2>
      <p>{project.description[locale]}</p>
      <div className="stack-tags">
        {project.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={17} />
            {t.projects.source}
            <span className="sr-only">{t.ui.external}</span>
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            {t.projects.demo}
            <ArrowUpRight size={17} />
            <span className="sr-only">{t.ui.external}</span>
          </a>
        )}
        {project.detailUrl && (
          <Link to={project.detailUrl}>
            {t.projects.detail}
            <ArrowUpRight size={17} />
          </Link>
        )}
      </div>
    </article>
  );
}
