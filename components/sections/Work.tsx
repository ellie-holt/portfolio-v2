"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
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
      className="w-full "
      style={{ scrollMarginTop: "calc(var(--site-header-height, 40px) - 2px)" }}
    >
      {/* section heading */}
      <div className="w-screen h-10 px-hpad relative -left-4 sm:-left-10 flex items-center bg-white border-b border-black border-t z-1">
        <h2 id="work-heading" className="font-mono text-lg">
          <span aria-hidden="true">// </span>work
        </h2>
      </div>

      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black ">
        {/* left column */}
        <div className="relative min-h-136 bg-white overflow-hidden">
          <div className="absolute inset-x-0 top-0 px-hpad py-r3 z-0 pointer-events-none">
            <p className="font-mono text-2xl md:text-[1.65rem] font-medium leading-tight text-aqua-ink/70">
              Check out some of the things I’ve made.
            </p>
            <div className="mt-r1 flex justify-center">
              <RoughCurvedArrow
                direction="down"
                stroke="#f27941"
                strokeWidth={3}
                roughness={1.5}
                bowing={3}
                className="h-32 w-24"
              />
            </div>
          </div>

          <div className="relative z-1 h-full">
            <Accordion
              type="single"
              collapsible
              className="border-0 h-full justify-end bg-transparent"
            >
              {projects.map((project) => (
                <AccordionItem
                  key={project.slug}
                  value={project.slug}
                  className="min-h-0 flex-none bg-white  border-l border-black transition-[flex-grow] duration-340 ease-in-out data-[state=open]:flex-1"
                >
                  <AccordionTrigger className="bg-white px-r2 py-r1 font-mono text-[clamp(1.75rem,3vw,2.8rem)] font-bold leading-tight hover:bg-aqua-100">
                    {project.title}
                  </AccordionTrigger>
                  <AccordionContent
                    className="min-h-0"
                    contentClassName="bg-white px-r2 pb-r1 flex flex-col"
                  >
                    <p className="pt-r1 leading-relaxed text-sm lg:text-base">
                      {project.description}
                    </p>

                    <ul
                      aria-label="Technologies used"
                      className="pt-r1 flex flex-wrap gap-r0 font-mono text-xs lg:text-sm"
                    >
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="shadow-[var(--shadow-blocky-xs)_#000] px-2 py-1 border border-black"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-r1 flex items-end justify-between gap-r1">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-labelledby={`${project.slug}-title`}
                        className="inline-flex items-center justify-start gap-r0 font-semibold underline decoration-1 hover:decoration-transparent transition-all"
                      >
                        <span className="text-base lg:text-lg lowercase">
                          view project
                        </span>
                        <RoughArrow
                          direction="right"
                          stroke="#f27941"
                          strokeWidth={1.4}
                          className="h-7 w-7"
                        />
                        <span className="sr-only">
                          {" "}
                          {project.title} - opens in a new tab
                        </span>
                      </a>

                      <div className="w-24 sm:w-28 aspect-square overflow-hidden border border-black bg-white shadow-[var(--shadow-blocky-xs)_#000]">
                        <img
                          src={project.image.src}
                          alt={project.image.alt}
                          className="h-full w-full object-cover"
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

        {/* right column */}
        <div className="px-hpad py-r3 flex flex-col gap-r2 bg-white">
          <div className="grid gap-r1">
            <h3 className="font-mono text-xl leading-snug">Toolbox</h3>
            <Tabs defaultValue={toolbox[0].title}>
              <TabsList className="w-auto flex-row flex-wrap items-center justify-start shadow-[var(--shadow-blocky-sm)_var(--color-aqua-300)]">
                {toolbox.map((group) => (
                  <TabsTrigger
                    key={group.title}
                    value={group.title}
                    className="h-full w-auto justify-center text-aqua-ink/75 hover:bg-aqua-100 hover:text-aqua-ink hover:cursor-pointer data-[state=active]:bg-aqua-200 data-[state=active]:text-aqua-ink data-[state=active]:shadow-[var(--shadow-blocky-xs)_var(--color-aqua-400)]"
                  >
                    {group.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {toolbox.map((group) => (
                <TabsContent
                  key={group.title}
                  value={group.title}
                  className="shadow-[var(--shadow-blocky-sm)_var(--color-tang-300)]"
                >
                  <ul
                    role="list"
                    className="grid list-disc gap-r0 pl-r2 marker:text-tang-500"
                  >
                    {group.items.map((tool) => (
                      <li key={tool} className="leading-relaxed text-aqua-ink">
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
                className="h-7 w-7"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
