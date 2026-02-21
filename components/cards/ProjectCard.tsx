import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className="grid gap-4 rounded-xl border border-[var(--color-azure-200)] bg-white p-5 shadow-[var(--shadow-blocky-xs)_var(--color-azure-200)]"
    >
      <h3 id={`${project.slug}-title`}>{project.title}</h3>

      <a href={project.liveUrl} target="_blank" rel="noreferrer">
        <img
          src={project.image.src}
          alt={project.image.alt}
          className="w-full rounded-lg border border-[var(--color-azure-200)]"
        />
      </a>

      <p>{project.description}</p>

      <ul
        aria-label="Technologies used"
        className="flex flex-wrap gap-2 list-none p-0"
      >
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-[var(--color-azure-100)] px-2.5 py-1 text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="font-mono">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          View project →
        </a>
      </p>
    </article>
  );
}
