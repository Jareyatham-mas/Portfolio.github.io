import { useState } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { usePreferences } from "../context";
import type { Locale } from "../context";
import { defaultResume, resumes } from "../data/resume";
import { PageHeading } from "../components/UI";
export default function Resume() {
  const { t, locale } = usePreferences();
  const [selected, setSelected] = useState<Locale>(() => defaultResume(locale));
  const file = resumes[selected];
  return (
    <div className="container interior-page resume-page">
      <PageHeading {...t.resume} />
      <div className="resume-toolbar">
        <div className="resume-language" role="group" aria-label={t.nav.resume}>
          {(["en", "th"] as const).map((l) => (
            <button
              key={l}
              aria-pressed={selected === l}
              className={selected === l ? "active" : ""}
              onClick={() => setSelected(l)}
            >
              {l === "en" ? t.resume.english : t.resume.thai}
              {!resumes[l] && <span>— {t.ui.resumePending}</span>}
            </button>
          ))}
        </div>
        {file && (
          <div className="resume-actions">
            <a
              className="button button-outline"
              href={file.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              {t.ui.openPdf}
              <span className="sr-only">{t.ui.external}</span>
            </a>
            <a className="button button-solid" href={file.path} download>
              <Download size={16} />
              {t.ui.download}
            </a>
          </div>
        )}
      </div>
      {file ? (
        <>
          <div className="resume-document-info">
            <span>
              <FileText size={16} />
              {selected === "en" ? t.resume.documentNote : t.resume.thai}
            </span>
            <span className="mono">PDF</span>
          </div>
          <figure className="resume-preview">
            <img
              src={file.preview}
              alt={selected === "en" ? t.resume.previewAlt : t.resume.thai}
              width="1072"
              height="1517"
            />
            <figcaption>{t.resume.fallback}</figcaption>
          </figure>
        </>
      ) : (
        <div className="resume-empty" role="status">
          <FileText size={44} strokeWidth={1} />
          <h2>{t.ui.resumePending}</h2>
          <p>{t.resume.pendingText}</p>
          <Link to="/contact" className="text-link">
            {t.nav.contact}
          </Link>
        </div>
      )}
    </div>
  );
}
