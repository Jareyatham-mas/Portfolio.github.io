import { useState } from "react";
import { usePreferences } from "../context";
import { projectCategories, projects, filterProjects } from "../data/projects";
import { ConnectBand, EmptyProjects, PageHeading } from "../components/UI";
import Filters from "../components/Filters";
import ProjectCard from "../components/ProjectCard";
export default function Projects() {
  const { t } = usePreferences();
  const [category, setCategory] = useState("all");
  const filtered = filterProjects(projects, category);
  return (
    <div className="container interior-page">
      <PageHeading {...t.projects} />
      <Filters
        items={projectCategories}
        selected={category}
        onSelect={setCategory}
        label={t.projects.filter}
      />
      <div className="results-count mono" aria-live="polite">
        {filtered.length} {t.projects.count}
      </div>
      {filtered.length ? (
        <div className="project-grid">
          {filtered.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.id} />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <EmptyProjects />
      ) : (
        <div className="no-results" role="status">
          {t.ui.noResults}
        </div>
      )}
      <ConnectBand />
    </div>
  );
}
