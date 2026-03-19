"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import Button from "@/components/ui/Button/Button";
import RoughArrow from "@/components/ui/RoughArrow";
import RoughCurvedArrow from "@/components/ui/RoughCurvedArrow";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { projects } from "@/data/projects";
import { toolbox } from "@/data/tools";

export default function Work() {
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
        {/* left: project showcase */}
        <div className="relative bg-white min-h-136 overflow-hidden">
          <div className="top-0 z-0 absolute inset-x-0 px-hpad py-r3 pointer-events-none">
            <h3 className="text-section-alt">
              Check out some of the things I’ve made.
            </h3>
            <div className="flex justify-center mt-r1">
              <RoughCurvedArrow
                direction="down"
                stroke="#f27941"
                strokeWidth={3}
                roughness={1.5}
                bowing={3}
                className="w-24 h-32"
              />
            </div>
          </div>

          <div className="z-1 relative h-full">
            <Accordion
              type="single"
              collapsible
              className="justify-end bg-transparent border-0 h-full"
            >
              {projects.map((project) => (
                <AccordionItem
                  key={project.slug}
                  value={project.slug}
                  className="flex-none data-[state=open]:flex-1 bg-white border-black border-x md:border-l md:border-r-0 min-h-0 transition-[flex-grow] duration-340 ease-in-out"
                >
                  <AccordionTrigger className="bg-white hover:bg-aqua-100 px-r2 py-r1 font-mono font-bold text-[clamp(1.75rem,3vw,2.8rem)] leading-tight">
                    {project.title}
                  </AccordionTrigger>
                  <AccordionContent
                    className="min-h-0"
                    contentClassName="bg-white px-r2 pb-r1 flex flex-col"
                  >
                    <p className="text-body pt-r1">{project.description}</p>

                    <ul
                      aria-label="Technologies used"
                      className="flex flex-wrap gap-r0 pt-r1 font-mono text-chip"
                    >
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="shadow-[var(--shadow-blocky-xs)_#000] px-2 py-1 border border-black font-mono"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-end gap-r1 mt-auto pt-r1">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-labelledby={`${project.slug}-title`}
                        className="inline-flex items-center gap-r0 font-semibold decoration-1 hover:decoration-transparent underline transition-all"
                      >
                        <span className="text-action lowercase">
                          view project
                        </span>
                        <RoughArrow
                          direction="right"
                          stroke="#f27941"
                          strokeWidth={1.4}
                          className="w-7 h-7"
                        />
                        <span className="sr-only">
                          {" "}
                          {project.title} - opens in a new tab
                        </span>
                      </a>

                      <div className="bg-white shadow-[var(--shadow-blocky-xs)_#000] border border-black w-24 sm:w-28 aspect-square overflow-hidden">
                        <img
                          src={project.image.src}
                          alt={project.image.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* right: tech toolbox */}
        <div className="flex flex-col gap-r2 bg-white px-hpad py-r3">
          <div className="gap-r1 grid">
            <h3>Toolbox</h3>
            <Tabs defaultValue={toolbox[0].title}>
              <TabsList className="flex-row flex-wrap justify-start items-center w-auto">
                {toolbox.map((group) => (
                  <TabsTrigger
                    key={group.title}
                    value={group.title}
                    className="justify-center w-auto h-full text-aqua-ink/75 cursor-pointer"
                  >
                    {group.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {toolbox.map((group) => (
                <TabsContent key={group.title} value={group.title}>
                  <ul
                    role="list"
                    className="gap-r0 grid pl-r2 marker:text-tang-500 list-disc"
                  >
                    {group.items.map((tool) => (
                      <li key={tool} className="text-aqua-ink">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          <div className="mt-auto pt-r3">
            <Button
              href="https://github.com/ellie-holt"
              target="_blank"
              rel="noreferrer"
            >
              <span>Browse repos</span>
              <RoughArrow
                direction="right"
                stroke="#f27941"
                strokeWidth={1.4}
                className="w-7 h-7"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
