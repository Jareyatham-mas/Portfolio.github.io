import { usePreferences } from "../context";
import type { Localized } from "../context";
export default function Filters({
  items,
  selected,
  onSelect,
  label,
}: {
  items: readonly { id: string; label: Localized }[];
  selected: string;
  onSelect: (id: string) => void;
  label: string;
}) {
  const { t, locale } = usePreferences();
  return (
    <div className="filters" role="group" aria-label={label}>
      {[{ id: "all", label: { th: t.ui.all, en: t.ui.all } }, ...items].map(
        (item) => (
          <button
            key={item.id}
            aria-pressed={selected === item.id}
            className={selected === item.id ? "active" : ""}
            onClick={() => onSelect(item.id)}
          >
            {item.label[locale]}
          </button>
        ),
      )}
    </div>
  );
}
