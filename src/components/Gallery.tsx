import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { usePreferences } from "../context";
import type { GalleryImage } from "../data/experience";
import { publicAsset } from "../lib/public-asset";
export default function Gallery({
  images,
  title,
}: {
  images: GalleryImage[];
  title: string;
}) {
  const { locale, t } = usePreferences();
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const close = () => setActive(null);
  useEffect(() => {
    if (active !== null) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
      opener.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);
  if (!images.length) return null;
  const shift = (step: number) =>
    setActive((i) =>
      i === null ? null : (i + step + images.length) % images.length,
    );
  return (
    <>
      <div className="activity-gallery">
        {images.map((im, i) => (
          <button
            key={im.src}
            className="gallery-thumb"
            onClick={(e) => {
              opener.current = e.currentTarget;
              setActive(i);
            }}
            aria-label={`${t.ui.gallery}: ${im.alt[locale]}`}
          >
            <img
              src={publicAsset(im.src)}
              alt={im.alt[locale]}
              loading="lazy"
              width="600"
              height="400"
            />
            <span>
              <Expand size={18} />
            </span>
          </button>
        ))}
      </div>
      <dialog
        className="lightbox"
        ref={dialog}
        aria-label={title}
        onCancel={close}
        onClose={close}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            shift(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            shift(-1);
          }
        }}
      >
        <button
          className="lightbox-close icon-button"
          onClick={close}
          aria-label={t.ui.close}
        >
          <X />
        </button>
        {active !== null && (
          <>
            <figure>
              <img src={publicAsset(images[active].src)} alt={images[active].alt[locale]} />
              <figcaption aria-live="polite">
                {images[active].caption?.[locale] ?? images[active].alt[locale]}
                <span className="mono">
                  {active + 1} / {images.length}
                </span>
              </figcaption>
            </figure>
            {images.length > 1 && (
              <div className="lightbox-controls">
                <button
                  className="icon-button"
                  onClick={() => shift(-1)}
                  aria-label={t.ui.previous}
                >
                  <ChevronLeft />
                </button>
                <button
                  className="icon-button"
                  onClick={() => shift(1)}
                  aria-label={t.ui.next}
                >
                  <ChevronRight />
                </button>
              </div>
            )}
          </>
        )}
      </dialog>
    </>
  );
}
