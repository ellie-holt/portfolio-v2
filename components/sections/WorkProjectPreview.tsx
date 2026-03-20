import type { Project } from "@/data/projects";
import RoughArrow from "@/components/ui/RoughArrow";

type WorkProjectPreviewProps = {
  project: Project;
  surfaceClassName?: string;
};

export default function WorkProjectPreview({
  project,
}: WorkProjectPreviewProps) {
  return (
    <div className="relative border-l-0 h-full">
      {/* Project title */}
      <div className="absolute z-1 bg-white border border-black dashed-outline outline-tang-500 my-r2 left-r2">
        <h3 className="text-section-display px-r1 py-r1 leading-tight">
          {project.title}
        </h3>
      </div>
      <div className="px-r2 h-full">
        <div className="flex flex-col items-start justify-between pb-r2 pt-20 relative z-1 h-full">
          {/* Project description */}
          <div className="border border-black bg-white px-r1 py-r1 w-1/2 self-end">
            <p className="max-w-prose text-body">{project.description}</p>
          </div>

          {/* Project stack */}
          <div className="border border-black bg-white mx-r1 px-r1 py-r1">
            <ul
              aria-label="Technologies used"
              className="flex flex-col gap-r0 font-mono text-chip"
            >
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="border border-black bg-white px-2 py-1 font-mono"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Project link */}
          <div className="border border-black bg-white px-r1 py-r1 self-end dashed-outline outline-tang-500">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-r0 font-semibold decoration-1 underline transition-all hover:decoration-transparent"
            >
              <span className="text-action lowercase">view project</span>
              <RoughArrow
                direction="right"
                stroke="#f27941"
                strokeWidth={1.4}
                className="w-7 h-7"
              />
              <span className="sr-only">
                {" "}
                {project.title} - opens in a new tab
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bg-white border border-black w-3/5 bottom-r3 right-1/5 max-w-120">
        <img
          src={project.image.src}
          alt={project.image.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
