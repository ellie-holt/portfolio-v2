"use client";

import { useState } from "react";

import TabRailButton from "@/components/ui/TabRailButton";
import WorkProjectPreview from "./WorkProjectPreview";
import { projects } from "@/data/projects";
import RoughDownRightArrow from "../ui/RoughDownRightArrow";
import RoughCurvedArrow from "../ui/RoughCurvedArrow";
import SectionShell from "./SectionShell";

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
    <SectionShell id="work" heading="work">
      {/* section content */}
      <div className="split-panel md:grid-cols-1! lg:grid-cols-[1fr_2fr]! 2xl:grid-cols-2!">
        {/* left: project chooser */}
        <div className="flex lg:flex-row flex-col min-h-76 3xs:min-h-71 2xs:min-h-64 xs:min-h-60 sm:min-h-62 md:min-h-74 lg:min-h-full bg-aqua-wash">
          <div className="flex flex-col lg:flex-4 w-full px-hpad pt-r3 pb-r1 xs:pb-0 lg:pb-r3">
            <h3 className="w-full text-section-display lg:text-[clamp(2rem,3vw,3rem)]">
              Check out some of the things I’ve made.
            </h3>
            {/* below-lg-only curved arrow below heading */}
            <div className="lg:hidden block self-center 2xs:self-end w-[clamp(4rem,11vw,6rem)] h-[clamp(5rem,12vw,10rem)] 2xs:-mt-r2 2xs:mr-14 sm:mr-r3">
              <RoughCurvedArrow
                direction="down"
                stroke="#f27941"
                strokeWidth={3.6}
                className="w-full h-full"
              />
            </div>
            {/* above-lg-only down-right arrow to project rail */}
            <RoughDownRightArrow className="hidden lg:block self-center w-40 h-40 mt-r2" />
          </div>

          <div className="flex flex-1 justify-center sm:justify-start lg:justify-end w-full lg:mt-auto">
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
        <div className="md:border-t! lg:border-t-0! bg-white">
          <WorkProjectPreview project={activeProject} />
        </div>
      </div>
    </SectionShell>
  );
}
