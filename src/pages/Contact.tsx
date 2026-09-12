import {
  ArrowUpRight,
  Github,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { usePreferences } from "../context";
import { socials } from "../data/socials";
import { PageHeading } from "../components/UI";
const icons = {
  github: Github,
  email: Mail,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  line: MessageCircle,
};
export default function Contact() {
  const { t, theme } = usePreferences();
  return (
    <div className="container interior-page contact-page">
      <PageHeading {...t.contact} />
      <div className="contact-layout">
        <div className="contact-art" data-reveal>
          <img
            src={`/images/${theme === "dark" ? "night" : "morning"}-mobile.webp`}
            alt=""
            width="840"
            height="473"
            loading="lazy"
          />
          <div>
            <span className="eyebrow">NATURE × TECHNOLOGY</span>
            <p>{t.contact.invitation}</p>
          </div>
        </div>
        <div className="contact-list">
          {socials.map((s, i) => {
            const Icon = icons[s.id];
            return (
              <a
                className="contact-card"
                key={s.id}
                href={s.url}
                target={s.id === "email" ? undefined : "_blank"}
                rel={s.id === "email" ? undefined : "noopener noreferrer"}
                data-reveal
              >
                <span className="contact-number mono">0{i + 1}</span>
                <span className="contact-icon">
                  <Icon size={23} strokeWidth={1.5} />
                </span>
                <div>
                  <h2>{s.name}</h2>
                  <p>{s.address}</p>
                </div>
                <ArrowUpRight className="contact-arrow" size={22} />
                {s.id !== "email" && (
                  <span className="sr-only">{t.ui.external}</span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
