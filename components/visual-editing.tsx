"use client";

import { VisualEditing } from "next-sanity/visual-editing";

export function VisualEditingControls() {
  return (
    <VisualEditing
      refresh={(payload) => {
        if (payload.source === "mutation") {
          return false;
        }

        return Promise.resolve();
      }}
    />
  );
}
