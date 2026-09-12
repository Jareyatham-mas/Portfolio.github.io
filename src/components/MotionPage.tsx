import { useEffect, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { useLocation } from "react-router-dom";
import "lenis/dist/lenis.css";
export default function MotionPage({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname]);
  useEffect(() => {
    const root = ref.current;
    if (!root || reduce || pathname === "/resume") return;
    let disposed = false;
    let cleanup: undefined | (() => void);
    const timer = window.setTimeout(() => {
      void import("../lib/scroll-motion")
        .then(({ mountScrollMotion }) => {
          if (!disposed) cleanup = mountScrollMotion(root, pathname);
        })
        .catch(() => {
          /* Content stays visible when optional motion cannot load. */
        });
    }, 150);
    return () => {
      disposed = true;
      clearTimeout(timer);
      cleanup?.();
    };
  }, [pathname, reduce]);
  useLayoutEffect(() => {
    if (hash) {
      let id = hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        /* Keep malformed fragments harmless. */
      }
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: reduce ? "instant" : "smooth" });
    }
  }, [hash, reduce]);
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        initial={pathname === "/" || reduce ? false : { opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.25 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
