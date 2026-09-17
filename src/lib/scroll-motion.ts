import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger);
export function mountScrollMotion(root: HTMLElement) {
  const media = gsap.matchMedia(root);
  media.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.utils.toArray<HTMLElement>("[data-reveal]", root).forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;
      gsap.from(el, {
        autoAlpha: 0,
        y: 16,
        duration: 0.45,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 94%", once: true },
        onComplete: () =>
          gsap.set(el, { clearProps: "transform,opacity,visibility" }),
      });
    });
  });
  media.add(
    "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    () => {
      const lenis = new Lenis({
        duration: 0.85,
        smoothWheel: true,
        anchors: true,
        prevent: (node) => !!node.closest("dialog"),
      });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      const overflowObserver = new MutationObserver(() => {
        if (document.body.style.overflow === "hidden") lenis.stop();
        else lenis.start();
      });
      overflowObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ["style"],
      });
      return () => {
        overflowObserver.disconnect();
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    },
  );
  const resize = new ResizeObserver(() => ScrollTrigger.refresh());
  resize.observe(root);
  ScrollTrigger.refresh();
  return () => {
    resize.disconnect();
    media.revert();
  };
}
