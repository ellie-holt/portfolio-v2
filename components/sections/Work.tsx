import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <div>
        <h2 id="work-heading">Work</h2>

        <p>
          Selected projects exploring responsive design, accessibility, and
          thoughtful front-end architecture.
        </p>

        <div>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <p>
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
