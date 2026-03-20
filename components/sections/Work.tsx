"use client";

import { useState } from "react";

import TabRailButton from "@/components/ui/TabRailButton";
import WorkProjectPreview from "./WorkProjectPreview";
import { projects } from "@/data/projects";

const DEFAULT_PROJECT = projects[0];

export default function Work() {
  // Keep only the selected slug in state; all other UI data is derived from it.
  const [activeProjectSlug, setActiveProjectSlug] = useState(
    DEFAULT_PROJECT.slug,
  );

  // Finds matching project using the selected slug, with a safe fallback.
  const activeProject =
    projects.find((project) => project.slug === activeProjectSlug) ??
    DEFAULT_PROJECT;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full"
      style={{ scrollMarginTop: "calc(var(--site-header-height, 40px) - 2px)" }}
    >
      {/* section heading */}
      <div className="section-bar full-bleed-bar">
        <h2 id="work-heading" className="text-section-heading">
          <span aria-hidden="true">// </span>work
        </h2>
      </div>

      {/* section content */}
      <div className="split-panel">
        {/* left: project chooser */}
        <div className="flex flex-col bg-aqua-200 min-h-136 md:min-h-full">
          <div className="px-hpad py-r3 w-full">
            <h3 className="w-full text-section-alt">
              Check out some of the things I’ve made.
            </h3>
          </div>

          <div className="mt-auto w-full flex justify-end">
            <ul
              aria-label="Projects"
              className="relative left-px mb-r2 flex flex-col items-end gap-0"
            >
              {/* Vertical folder-tab rail: each tab selects the right-side preview. */}
              {projects.map((project, index) => {
                const isActive = project.slug === activeProjectSlug;

                return (
                  <li
                    key={project.slug}
                    className="-mt-3 first:mt-0"
                    style={{ zIndex: isActive ? 4 : index + 1 }}
                  >
                    <TabRailButton
                      isActive={isActive}
                      onClick={() => setActiveProjectSlug(project.slug)}
                      aria-pressed={isActive}
                    >
                      {project.title}
                    </TabRailButton>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* right: project preview */}
        <div className="bg-white">
          <WorkProjectPreview project={activeProject} />
        </div>
      </div>
    </section>
  );
}
