import { useState } from "react";
import { Info } from "lucide-react";
import { usePreferences } from "../context";
import { toolCategories, tools } from "../data/tools";
import Filters from "../components/Filters";
import ToolIcon from "../components/ToolIcon";
import { PageHeading, ConnectBand } from "../components/UI";
export default function Tools() {
  const { t, locale } = usePreferences();
  const [category, setCategory] = useState("all");
  return (
    <div className="container interior-page">
      <PageHeading {...t.tools} />
      <Filters
        items={toolCategories}
        selected={category}
        onSelect={setCategory}
        label={t.tools.filter}
      />
      <div className="tool-groups">
        {toolCategories
          .filter((c) => category === "all" || category === c.id)
          .map((c) => (
            <section key={c.id} className="tool-group" data-reveal>
              <div className="tool-group-heading">
                <h2>{c.label[locale]}</h2>
                <span className="mono">
                  {tools
                    .filter((tool) => tool.category === c.id)
                    .length.toString()
                    .padStart(2, "0")}
                </span>
              </div>
              <div className="tools-grid">
                {tools
                  .filter((tool) => tool.category === c.id)
                  .map((tool) => (
                    <article className="tool-card" key={tool.name}>
                      <div className="tool-icon">
                        <ToolIcon name={tool.name} icon={tool.icon} />
                      </div>
                      <h3>{tool.name}</h3>
                      <p>{tool.description[locale]}</p>
                    </article>
                  ))}
              </div>
            </section>
          ))}
      </div>
      <p className="tool-note">
        <Info size={17} />
        {t.tools.note}
      </p>
      <ConnectBand />
    </div>
  );
}
