import type { Preview } from "@storybook/nextjs-vite";
import { createElement } from "react";
import { MINIMAL_VIEWPORTS } from "storybook/viewport";
import "../app/globals.css";
import { rootFontClassName } from "../app/fonts";

const preview: Preview = {
  decorators: [
    (Story) => createElement("div", { className: rootFontClassName }, Story()),
  ],
  parameters: {
    layout: "fullscreen",
    viewport: {
      options: MINIMAL_VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      disableSave: true,
    },
  },
  initialGlobals: {
    viewport: {
      value: "desktop",
      isRotated: false,
    },
  },
};

export default preview;
