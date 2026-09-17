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
import BotanicalAccent from "../components/BotanicalAccent";
const icons = {
  github: Github,
  email: Mail,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  line: MessageCircle,
};
export default function Contact() {
  const { t } = usePreferences();
  return (
    <div className="container interior-page contact-page">
      <PageHeading {...t.contact} />
      <div className="contact-layout">
        <div className="contact-intro" data-reveal>
          <BotanicalAccent className="contact-botanical" />
          <div className="contact-intro-copy">
            <span className="eyebrow">{t.contact.collaboration}</span>
            <h2>{t.contact.invitation}</h2>
            <p>{t.contact.discussion}</p>
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
