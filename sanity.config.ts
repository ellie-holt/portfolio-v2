import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { resolve } from "./app/studio/src/presentation/resolve";

const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://ellieholt.vercel.app"
    : "http://localhost:3000");

export default defineConfig({
  name: "default",
  title: "Portfolio Studio",
  projectId: "jtd931ew",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      resolve,
      previewUrl: {
        origin: siteOrigin,
        initial: "/blog",
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
