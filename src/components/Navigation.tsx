import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { usePreferences } from "../context";
import { publicAsset } from "../lib/public-asset";
const paths = [
  "home",
  "about",
  "projects",
  "experience",
  "tools",
  "contact",
  "resume",
] as const;
export default function Navigation() {
  const { t, locale, setLocale, theme, toggleTheme } = usePreferences();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    const mq = matchMedia("(min-width: 1180px)");
    const close = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  return (
    <header
      className={`navigation ${scrolled ? "scrolled" : ""} ${pathname === "/" ? "on-hero" : ""}`}
    >
      <a className="skip-link" href="#main">
        {t.ui.skip}
      </a>
      <div className="nav-inner">
        <Link className="brand" to="/" aria-label={t.name}>
          <img src={publicAsset("/images/avatar.webp")} width="38" height="38" alt="" />
          <span>
            {t.name}
            <small>DEVELOPER PORTFOLIO</small>
          </span>
        </Link>
        <nav
          className="desktop-nav"
          aria-label={locale === "th" ? "เมนูหลัก" : "Main navigation"}
        >
          {paths.map((key) => (
            <NavLink
              key={key}
              to={key === "home" ? "/" : `/${key}`}
              end
              className={key === "resume" ? "nav-resume" : ""}
            >
              {t.nav[key]}
              {key === "resume" && <ArrowUpRight size={14} />}
            </NavLink>
          ))}
        </nav>
        <div className="nav-controls">
          <button
            className="language-control"
            onClick={() => setLocale(locale === "th" ? "en" : "th")}
          >
            <span className={locale === "th" ? "selected" : ""}>TH</span>
            <span className="divider">/</span>
            <span className={locale === "en" ? "selected" : ""}>EN</span>
            <span className="sr-only">{t.ui.language}</span>
          </button>
          <span className="control-rule" />
          <button
            className="icon-button theme-control"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.ui.toggleLight : t.ui.toggleDark}
          >
            {theme === "dark" ? <Moon size={19} /> : <Sun size={19} />}
          </button>
          <button
            ref={trigger}
            className="icon-button menu-trigger"
            onClick={() => setOpen(true)}
            aria-label={t.ui.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={23} />
          </button>
        </div>
      </div>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-dialog" aria-label={t.ui.menu}
        onCancel={close}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
      >
        <div className="mobile-menu-head">
          <span>{t.name}</span>
          <button
            className="icon-button"
            onClick={close}
            aria-label={t.ui.close}
          >
            <X />
          </button>
        </div>
        <nav>
          {paths.map((key, i) => (
            <NavLink
              key={key}
              to={key === "home" ? "/" : `/${key}`}
              end
              onClick={close}
            >
              <span className="mono">0{i + 1}</span>
              {t.nav[key]}
              <ArrowUpRight size={20} />
            </NavLink>
          ))}
        </nav>
        <p className="mobile-menu-footer">Nature × Technology</p>
      </dialog>
    </header>
  );
}


