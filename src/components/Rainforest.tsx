import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { usePreferences } from "../context";
export default function Rainforest() {
  const { theme } = usePreferences();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    const hero = root?.closest(".hero");
    if (!root || !hero) return;
    let frame = 0;
    let visible = true;
    const updatePlaying = () => {
      root.dataset.playing = visible && !document.hidden ? "true" : "false";
    };
    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        updatePlaying();
      },
      { threshold: 0 },
    );
    observer.observe(hero);
    document.addEventListener("visibilitychange", updatePlaying);
    const media = matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const move = (event: Event) => {
      const e = event as PointerEvent;
      if (!media.matches || e.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        root.style.setProperty(
          "--pointer-x",
          `${((e.clientX - r.left - r.width / 2) / r.width) * 12}px`,
        );
        root.style.setProperty(
          "--pointer-y",
          `${((e.clientY - r.top - r.height / 2) / r.height) * 8}px`,
        );
      });
    };
    const reset = () => {
      root.style.setProperty("--pointer-x", "0px");
      root.style.setProperty("--pointer-y", "0px");
    };
    hero.addEventListener("pointermove", move, { passive: true });
    hero.addEventListener("pointerleave", reset);
    media.addEventListener("change", reset);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
      media.removeEventListener("change", reset);
      document.removeEventListener("visibilitychange", updatePlaying);
    };
  }, []);
  return (
    <div
      className="rainforest"
      ref={ref}
      aria-hidden="true"
      data-playing="true"
    >
      <div className="forest-depth">
        <div className="forest-pointer">
          {(["morning", "night"] as const).map((kind) => (
            <img
              className={`forest-photo forest-${kind}`}
              key={kind}
              src={`/images/${kind}.webp`}
              srcSet={`/images/${kind}-mobile.webp 840w, /images/${kind}.webp 1672w`}
              sizes="100vw"
              fetchPriority={
                (theme === "dark" ? "night" : "morning") === kind
                  ? "high"
                  : "low"
              }
              width="1672"
              height="941"
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="forest-light" />
      <div className="forest-fog fog-one" />
      <div className="forest-fog fog-two" />
      <div className="forest-particles">
        {Array.from({ length: 12 }, (_, i) => (
          <i
            key={i}
            style={
              {
                "--x": `${(i * 23 + 9) % 100}%`,
                "--y": `${(i * 37 + 14) % 100}%`,
                "--delay": `${-i * 1.9}s`,
                "--duration": `${15 + (i % 5) * 3}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="forest-foreground">
        <img
          className="forest-leaves"
          src="/images/leaves.webp"
          srcSet="/images/leaves-mobile.webp 840w, /images/leaves.webp 1672w"
          sizes="100vw"
          width="1672"
          height="941"
          alt=""
          fetchPriority="low"
        />
      </div>
    </div>
  );
}
