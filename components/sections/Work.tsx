import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full bg-[var(--color-azure-wash)]"
    >
      <div className="w-full px-[clamp(1rem,3vw,2.5rem)] py-16 grid gap-5">
        <h2 id="work-heading">Work</h2>

        <p>
          Selected projects exploring responsive design, accessibility, and
          thoughtful front-end architecture.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <p className="font-mono">
          <a
            href="https://github.com/ellie-holt"
            target="_blank"
            rel="noreferrer"
          >
            Browse more on GitHub →
          </a>
        </p>
      </div>
    </section>
  );
}
