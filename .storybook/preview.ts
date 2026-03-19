import type { Preview } from "@storybook/nextjs-vite";
import { createElement } from "react";
import "../app/globals.css";
import { rootFontClassName } from "../app/fonts";

const preview: Preview = {
  decorators: [
    (Story) => createElement("div", { className: rootFontClassName }, Story()),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      disableSave: true,
    },
  },
};

export default preview;
