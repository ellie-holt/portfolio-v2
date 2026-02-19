import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article aria-labelledby={`${project.slug}-title`}>
      <h3 id={`${project.slug}-title`}>{project.title}</h3>

      <a href={project.liveUrl} target="_blank" rel="noreferrer">
        <img src={project.image.src} alt={project.image.alt} />
      </a>

      <p>{project.description}</p>

      <ul aria-label="Technologies used">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <p>
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          View project →
        </a>
      </p>
    </article>
  );
}
