import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className="relative grid grid-cols-1 lg:grid-cols-[2fr_3fr] grid-rows-[auto_1fr_auto] bg-white border border-black"
    >
      <header className="col-span-full bg-white border-b border-black">
        <div className="px-r2 py-r1">
          <h3
            id={`${project.slug}-title`}
            className="font-mono font-bold text-2xl sm:text-3xl leading-tight"
          >
            {project.title}
          </h3>
        </div>
      </header>

      <figure className="relative order-2 2xl:max-h-72 3xl:max-h-60 lg:row-span-2 bg-white overflow-hidden">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-[1.015] lg:bg-bottom "
            loading="lazy"
          />
        </a>
      </figure>

      <div className="order-3 bg-white border-t border-black lg:border-t-0 lg:border-l flex flex-col">
        <div className="border-b border-black">
          <ul
            aria-label="Technologies used"
            className="flex flex-wrap gap-r0 px-r2 py-r1 font-mono text-sm"
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
        </div>
        <div className="px-r2 py-r1 md:py-r2 leading-relaxed">
          <p className="max-w-prose">{project.description}</p>
        </div>
      </div>

      <div className="order-4 col-span-full col-start-1 lg:col-span-1 lg:col-start-2 lg:col-end-3 bg-aqua-wash w-full overflow-hidden border-t lg:border-l border-black">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-labelledby={`${project.slug}-title`}
          className="flex items-center justify-end gap-r1 ml-auto py-r1 px-r2 font-semibold underline decoration-1 hover:decoration-transparent transition-all"
        >
          <span className="text-xl lowercase">view project</span>
          <span aria-hidden="true">→</span>
          <span className="sr-only"> {project.title} - opens in a new tab</span>
        </a>
      </div>
    </article>
  );
}
