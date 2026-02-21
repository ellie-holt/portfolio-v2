import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className="relative grid grid-cols-[5fr_1fr] sm:grid-cols-2 lg:flex lg:flex-col bg-white border border-black"
      style={{ "--accent": project.accent } as React.CSSProperties}
    >
      <h3 id={`${project.slug}-title`} className="sr-only">
        {project.title}
      </h3>

      <div
        className="hidden lg:block absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: "var(--accent)" }}
        aria-hidden="true"
      />

      <figure className="relative order-1 sm:row-span-3 md:row-span-4 bg-white overflow-hidden">
        <figcaption
          aria-hidden="true"
          className="hidden lg:block top-6 right-6 left-6 z-10 absolute justify-center bg-white border-2 border-black"
        >
          <span className="mb-1 py-2 text-4xl sm:text-5xl lg:text-[3vw] font-mono font-bold text-center block">
            {project.title}
          </span>
        </figcaption>
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-[1.015]"
            loading="lazy"
          />
        </a>
      </figure>

      <header className="flex justify-center items-center order-2 sm:col-start-2 sm:row-start-1 bg-white px-2 sm:px-4 border-l border-black lg:border-none">
        <span className="font-mono font-bold text-3xl sm:text-4xl px-2 py-3 leading-tight sm:leading-normal sm:whitespace-nowrap [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]">
          {project.title}
        </span>
      </header>

      <div className="order-3 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-2 bg-white border-t border-black">
        <ul
          aria-label="Technologies used"
          className="flex flex-wrap gap-2 px-6 py-3 font-mono text-sm"
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

      <div className="order-4 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-3 bg-white px-6 py-6 leading-relaxed border-t border-black">
        <p>{project.description}</p>
      </div>

      <div className="order-5 col-span-full sm:col-span-1 sm:col-start-2 sm:row-start-4 bg-aqua-wash w-full h-[calc(var(--spacing-banner)_*_1.5)] overflow-hidden border-t border-black">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-labelledby={`${project.slug}-title`}
          className="flex items-center gap-4 ml-auto py-3 pr-6 pl-6 font-semibold underline decoration-1 hover:decoration-transparent transition-all"
        >
          <span className="text-2xl lowercase">view project</span>
          <span aria-hidden="true">→</span>
          <span className="sr-only">
            {" "}
            — {project.title} - opens in a new tab
          </span>
        </a>
      </div>
    </article>
  );
}
