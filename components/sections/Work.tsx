import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
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
            Check out some of the things I’ve built recently.
          </p>
          <p className="max-w-prose leading-relaxed">Recent projects.</p>

          <div className="grid gap-r1">
            <h3 className="text-xl leading-snug">Toolbox</h3>
            <div className="grid gap-r1">
              {toolbox.map((group) => (
                <div
                  key={group.title}
                  className="bg-white border border-black px-r2 py-r1"
                >
                  <p className="font-mono text-sm uppercase">{group.title}</p>
                  <ul className="flex flex-wrap gap-r0 mt-3">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="bg-white border border-black px-2 py-1 font-mono text-sm block shadow-[var(--shadow-blocky-xs)_var(--color-tang-300)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
