import type { Locale } from "../context";
import { publicAsset } from "../lib/public-asset";
export type ResumeFile = { path: string; preview: string; pages: number };
export const resumes: Record<Locale, ResumeFile | null> = {
  th: null,
  en: {
    path: publicAsset("/resume/jareyatham-masong-en.pdf"),
    preview: publicAsset("/resume/preview-en.webp"),
    pages: 1,
  },
};
export function defaultResume(locale: Locale, files = resumes): Locale {
  return files[locale] ? locale : files.en ? "en" : "th";
}
