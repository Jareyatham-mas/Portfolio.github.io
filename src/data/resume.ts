import type { Locale } from "../context";
export type ResumeFile = { path: string; preview: string; pages: number };
export const resumes: Record<Locale, ResumeFile | null> = {
  th: null,
  en: {
    path: "/resume/jareyatham-masong-en.pdf",
    preview: "/resume/preview-en.webp",
    pages: 1,
  },
};
export function defaultResume(locale: Locale, files = resumes): Locale {
  return files[locale] ? locale : files.en ? "en" : "th";
}
