import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function Work() {
  const techChips = Array.from(
    new Set(projects.flatMap((project) => project.stack)),
  );

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full bg-azure-wash"
    >
      {/* section heading */}
      <div className="w-screen h-10 px-hpad relative -left-10 flex items-center bg-white border-b border-t z-1">
        <h2 id="work-heading" className="font-mono text-lg">
          <span aria-hidden="true">// </span>work
        </h2>
      </div>

      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black border-b">
        {/* left column */}
        <div className="px-hpad py-10 flex flex-col gap-6">
          <p className="font-mono text-[clamp(2rem,5vw,3rem)] font-bold leading-tight">
            Selected work
          </p>
          <p className="leading-loose">
            A few recent projects exploring responsive design, accessibility,
            and thoughtful front‑end architecture.
          </p>

          <div>
            <h3 className="font-mono text-sm uppercase">Tech used</h3>
            <ul role="list" className="flex flex-wrap gap-2 mt-3">
              {techChips.map((chip) => (
                <li key={chip}>
                  <span className="bg-white border border-black px-2 py-1 font-mono text-sm block shadow-[var(--shadow-blocky-xs)_var(--color-tang-300)]">
                    {chip}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://github.com/ellie-holt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 w-fit bg-white border border-black px-5 py-3 font-mono text-lg shadow-[var(--shadow-blocky-sm)_var(--color-tang-300)]"
          >
            Browse repos →
          </a>
        </div>

        {/* right column */}
        <div className="px-hpad py-10 grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
