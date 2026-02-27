import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { projects } from "@/data/projects";
import { toolbox } from "@/data/tools";
import type { Project } from "@/data/projects";

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full bg-azure-wash"
      style={{ scrollMarginTop: "calc(var(--site-header-height, 40px) - 2px)" }}
    >
      {/* section heading */}
      <div className="w-screen h-10 px-hpad relative -left-10 flex items-center bg-white border-b border-black border-t z-1">
        <h2 id="work-heading" className="font-mono text-lg">
          <span aria-hidden="true">// </span>work
        </h2>
      </div>

      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black ">
        {/* left column */}
        <div className="px-hpad py-r3 flex flex-col gap-r2">
          <p className="font-mono text-[clamp(2rem,5vw,3rem)] font-bold leading-tight">
            Check out some of the things I’ve made.
          </p>
          <p className="max-w-prose leading-relaxed">Recent projects.</p>

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
              Browse repos →
            </Button>
          </div>
        </div>

        {/* right column */}
        <div className="px-hpad py-r3 grid gap-r2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
