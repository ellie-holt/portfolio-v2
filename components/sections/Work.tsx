"use client";

import { useState } from "react";

import TabRailButton from "@/components/ui/TabRailButton";
import WorkProjectPreview from "./WorkProjectPreview";
import { projects } from "@/data/projects";
import RoughDownRightArrow from "../ui/RoughDownRightArrow";
import RoughCurvedArrow from "../ui/RoughCurvedArrow";

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
        <div className="flex lg:flex-row flex-col bg-aqua-wash min-h-76 3xs:min-h-74 2xs:min-h-64 xs:min-h-60 sm:min-h-62 md:min-h-74 lg:min-h-full">
          <div className="px-hpad pb-r1 xs:pb-0 lg:pb-r3 pt-r3 w-full flex flex-col lg:flex-4">
            <h3 className="w-full text-section-display lg:text-[clamp(2rem,3vw,3rem)]">
              Check out some of the things I’ve made.
            </h3>
            {/* below-lg-only curved arrow below heading */}
            <div className="block lg:hidden 2xs:mr-14 sm:mr-r3 2xs:-mt-r2 self-center 2xs:self-end w-[clamp(4rem,11vw,6rem)] h-[clamp(5rem,12vw,10rem)]">
              <RoughCurvedArrow
                direction="down"
                stroke="#f27941"
                strokeWidth={3.6}
                className="w-full h-full"
              />
            </div>
            {/* above-lg-only down-right arrow to project rail */}
            <RoughDownRightArrow className="w-40 h-40 mt-r2 hidden lg:block self-center" />
          </div>

          <div className="flex flex-1 lg:justify-end justify-center sm:justify-start lg:mt-auto w-full">
            <ul
              aria-label="Projects"
              className="top-px lg:top-0 lg:left-px relative flex lg:flex-col items-end gap-0 mx-r1 2xs:mx-r2 lg:mx-0 lg:my-r2"
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
