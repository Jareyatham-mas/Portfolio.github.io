import { Code2, Database, ListChecks, Bug } from "lucide-react";
import { publicAsset } from "../lib/public-asset";
export default function ToolIcon({
  name,
  icon,
}: {
  name: string;
  icon?: string;
}) {
  if (icon)
    return (
      <img
        src={publicAsset(`/icons/${icon}.svg`)}
        width="32"
        height="32"
        alt=""
        loading="lazy"
      />
    );
  const Icon = name.includes("SQL")
    ? Database
    : name === "Bug Reporting"
      ? Bug
      : name === "Test Case Design"
        ? ListChecks
        : Code2;
  return <Icon size={30} strokeWidth={1.5} />;
}
