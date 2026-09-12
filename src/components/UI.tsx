import { ArrowDown, ArrowUpRight, Github, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { usePreferences } from "../context";
export function TextLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function PageHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <div className="page-heading" data-reveal>
      <span className="eyebrow">
        <span className="tiny-line" />
        {eyebrow}
      </span>
      <h1>{title}</h1>
      <p>{lead}</p>
    </div>
  );
}
export function SectionHead({
  number,
  title,
  text,
  to,
}: {
  number: string;
  title: string;
  text?: string;
  to?: string;
}) {
  const { t } = usePreferences();
  return (
    <div className="section-head" data-reveal>
      <div>
        <span className="section-number mono">{number} /</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {to && (
        <TextLink to={to}>
          {t.home.viewAll} {t.nav[to.slice(1) as keyof typeof t.nav]}
        </TextLink>
      )}
    </div>
  );
}
export function EmptyProjects({ compact = false }: { compact?: boolean }) {
  const { t } = usePreferences();
  const Heading = compact ? 'h3' : 'h2';
  return (
    <div className={`projects-empty ${compact ? "compact" : ""}`} data-reveal>
      <div className="empty-symbol">
        <Sprout size={40} strokeWidth={1.2} />
      </div>
      <div className="empty-copy">
        <span className="eyebrow">{t.ui.workInProgress}</span>
        <Heading>{t.projects.emptyTitle}</Heading>
        <p>{t.projects.emptyText}</p>
      </div>
      <a
        href="https://github.com/Jareyatham-mas"
        target="_blank"
        rel="noopener noreferrer"
        className="button button-outline"
      >
        <Github size={18} />
        {t.projects.github}
        <ArrowUpRight size={16} />
        <span className="sr-only">{t.ui.external}</span>
      </a>
    </div>
  );
}
export function ConnectBand() {
  const { t } = usePreferences();
  return (
    <section className="connect-band" data-reveal>
      <span className="eyebrow">{t.contact.eyebrow}</span>
      <h2>{t.home.connectTitle}</h2>
      <div>
        <p>{t.home.connectText}</p>
        <Link to="/contact" className="circle-link" aria-label={t.nav.contact}>
          <ArrowUpRight size={30} />
        </Link>
      </div>
    </section>
  );
}
export function Footer() {
  const { t } = usePreferences();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link to="/" className="footer-brand">
          J<span>.</span>M<span> / </span>
          <small>{t.footer.line}</small>
        </Link>
        <div className="footer-meta">
          <span>
            © {new Date().getFullYear()} {t.name}
          </span>
          <button
            className="top-button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? "instant"
                  : "smooth",
              })
            }
          >
            {t.footer.top}
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
export function RoutePending() {
  return (
    <div className="route-loading" role="status">
      <Sprout aria-hidden="true" />
      <span>…</span>
    </div>
  );
}
