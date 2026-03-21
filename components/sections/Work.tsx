"use client";

import { useState } from "react";

import TabRailButton from "@/components/ui/TabRailButton";
import WorkProjectPreview from "./WorkProjectPreview";
import { projects } from "@/data/projects";
import RoughDownRightArrow from "../ui/RoughDownRightArrow";

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
      <div className="md:grid-cols-1! lg:grid-cols-[1fr_2fr]! 2xl:grid-cols-2! split-panel">
        {/* left: project chooser */}
        <div className="flex lg:flex-row flex-col bg-aqua-wash min-h-60 lg:min-h-full">
          <div className="px-hpad py-r3 w-full">
            <h3 className="w-full text-section-display lg:text-[clamp(2rem,3vw,3rem)]">
              Check out some of the things I’ve made.
            </h3>
            <RoughDownRightArrow className="w-40 h-40 mt-r2 mx-auto hidden lg:block" />
          </div>

          <div className="flex flex-1 lg:justify-end lg:mt-auto w-full">
            <ul
              aria-label="Projects"
              className="top-px lg:top-0 lg:left-px relative flex lg:flex-col items-end gap-0 mx-r2 lg:mx-0 lg:my-r2"
            >
              {/* Vertical folder-tab rail on lg viewports and above: each tab selects the right-side preview. */}
              {projects.map((project, index) => {
                const isActive = project.slug === activeProjectSlug;

                return (
                  <li
                    key={project.slug}
                    className="lg:-mt-3 lg:first:mt-0 lg:mr-0 -ml-3 first:ml-0"
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
        <div className="bg-white md:border-t! lg:border-t-0!">
          <WorkProjectPreview project={activeProject} />
        </div>
      </div>
    </section>
  );
}
