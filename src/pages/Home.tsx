import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Download,
  GitBranch,
} from "lucide-react";
import { Link } from "react-router-dom";
import { usePreferences } from "../context";
import Rainforest from '../components/Rainforest';
import ToolIcon from '../components/ToolIcon';
import { tools } from '../data/tools';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import { defaultResume, resumes } from '../data/resume';
import ProjectCard from '../components/ProjectCard';
import {
  ConnectBand,
  EmptyProjects,
  SectionHead,
  TextLink,
} from "../components/UI";
export default function Home() {
  const { t, locale } = usePreferences();
  const resumeLocale = defaultResume(locale);
  const resumeFile = resumes[resumeLocale];
  const featuredExperience = experiences[0];
  const featuredOrganization = featuredExperience?.organizations[0];
  return (
    <>
      <section className="hero">
        <Rainforest />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content container">
          <span className="hero-eyebrow">
            <span className="tiny-line" />
            {t.home.eyebrow}
          </span>
          <h1>
            <span>{t.home.headline1}</span>
            <span className="hero-accent">{t.home.headline2}</span>
          </h1>
          <div className="hero-bio">
            <p className="hero-intro">{t.home.intro}</p>
            <p className="hero-description">{t.home.description}</p>
          </div>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">
              {t.home.projects}
              <ArrowUpRight size={18} />
            </Link>
            {resumeFile ? <a
              className="button button-ghost"
              href={resumeFile.path}
              download
            >
              <Download size={17} />
              {t.ui.download}
              <small>{resumeLocale.toUpperCase()}</small>
            </a> : <Link className="button button-ghost" to="/resume">
              {t.nav.resume}<ArrowUpRight size={17} />
            </Link>}
          </div>
        </div>
        <div className="hero-bottom container">
          <a href="#discover" className="scroll-cue">
            <span className="scroll-circle">
              <ArrowDown size={16} />
            </span>
            {t.home.explore}
          </a>
          <span className="hero-coordinate mono">
            NATURE × TECHNOLOGY <span>01 — 07</span>
          </span>
        </div>
        <div className="hero-side-label mono" aria-hidden="true">
          A DIGITAL RAINFOREST / J.M.
        </div>
      </section>
      <div className="interest-strip">
        <div className="container">
          <span className="interest-label">{t.home.interests}</span>
          <div className="interest-items">
            <span>
              <Code2 />
              Full-Stack Development
            </span>
            <span>
              <Database />
              Backend Systems
            </span>
            <span>
              <GitBranch />
              Automation
            </span>
            <span>
              Software Testing
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </div>
      <div className="container home-sections" id="discover">
        <section className="story-section" data-reveal>
          <div className="story-mark">
            <span className="section-number mono">01 / {t.about.eyebrow}</span>
            <div className="code-mark" aria-hidden="true">
              &#123;<span>↗</span>&#125;
            </div>
            <span className="eyebrow">{t.home.chapter}</span>
          </div>
          <div className="story-copy">
            <h2>{t.home.storyTitle}</h2>
            <p>{t.home.storyText}</p>
            <TextLink to="/about">{t.home.about}</TextLink>
          </div>
        </section>
        <section className="home-projects">
          <SectionHead
            number="02"
            title={t.home.projectsTitle}
            text={t.home.projectsText}
            to="/projects"
          />
          {projects.length ? (
            <div className="project-grid">
              {projects.slice(0, 2).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : <EmptyProjects compact />}
        </section>
        <section className="home-experience">
          <SectionHead
            number="03"
            title={t.home.experienceTitle}
            text={t.home.experienceText}
            to="/experience"
          />
          {featuredExperience && <Link to="/experience" className="experience-preview" data-reveal>
            <span className="experience-preview-number mono">01</span>
            <div>
              <span className="eyebrow">
                {[featuredOrganization?.period?.[locale], featuredOrganization?.role[locale]].filter(Boolean).join(' · ')}
              </span>
              <h3>{featuredExperience.title[locale]}</h3>
              {featuredOrganization && <p>{featuredOrganization.name[locale]}</p>}
            </div>
            <ArrowUpRight />
          </Link>}
        </section>
        <section className="home-tools">
          <SectionHead
            number="04"
            title={t.home.toolsTitle}
            text={t.home.toolsText}
            to="/tools"
          />
          <div className="tool-preview" data-reveal>
            {[
              "React",
              "Node.js",
              "Python",
              "C#",
              "SQL",
              "Docker",
              "n8n",
              "Git",
            ].map((tool) => (
              <Link key={tool} to="/tools">
                <span className="tool-letter">
                  <ToolIcon name={tool} icon={tools.find(item=>item.name===tool)?.icon}/>
                </span>
                <span>{tool}</span>
              </Link>
            ))}
          </div>
        </section>
        <ConnectBand />
      </div>
    </>
  );
}
