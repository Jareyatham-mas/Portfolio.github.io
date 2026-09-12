import * as icons from "simple-icons";
import { mkdir, writeFile } from "node:fs/promises";
const names = [
  "html5",
  "css",
  "javascript",
  "react",
  "nodedotjs",
  "express",
  "dotnet",
  "python",
  "mysql",
  "mongodb",
  "postman",
  "swagger",
  "n8n",
  "git",
  "github",
  "docker",
  "trello",
  "facebook",
  "instagram",
  "line",
];
await mkdir("public/icons", { recursive: true });
for (const slug of names) {
  const icon = Object.values(icons).find((i) => i.slug === slug);
  if (!icon) {
    console.log("Missing icon:", slug);
    continue;
  }
  await writeFile(`public/icons/${slug}.svg`, icon.svg);
}
console.log("Local technology icons prepared.");
