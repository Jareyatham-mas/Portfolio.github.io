import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { th } from "./translations/th";
import type { Dictionary } from "./translations/th";
import { en } from "./translations/en";
export type Locale = "th" | "en";
export type Localized = Record<Locale, string>;
type Theme = "light" | "dark";
type Preferences = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: Dictionary;
};
const Context = createContext<Preferences | null>(null);
export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(
    document.documentElement.lang === "en" ? "en" : "th",
  );
  const [theme, setTheme] = useState<Theme>(
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );
  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      localStorage.setItem("rainforest-locale", locale);
    } catch {
      /* In-memory preferences remain available. */
    }
  }, [locale]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#132c25" : "#f5f7ef");
    try {
      localStorage.setItem("rainforest-theme", theme);
    } catch {
      /* Storage can be disabled. */
    }
  }, [theme]);
  return (
    <Context.Provider
      value={{
        locale,
        setLocale,
        theme,
        toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
        t: locale === "th" ? th : en,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export function usePreferences() {
  const value = useContext(Context);
  if (!value) throw new Error("Missing PreferencesProvider");
  return value;
}
