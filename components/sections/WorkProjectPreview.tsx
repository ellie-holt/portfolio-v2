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
      <div className="relative flex md:flex-row flex-col gap-r2 items-end px-r2 py-r2 h-full">
        {/* Project details on the left */}
        <div className="flex flex-col flex-1 self-start gap-r1">
          {/* Project description */}
          <div className=" bg-white px-r1 ">
            <p className="max-w-prose text-body">{project.description}</p>
          </div>
          {/* Project stack */}
          <div className="bg-white mx-r1  ">
            <ul
              aria-label="Technologies used"
              className="flex flex-wrap gap-r0 font-mono text-chip"
            >
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="bg-white px-2 py-1 border border-black font-mono"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project preview/cta on the right */}
        <div className="flex flex-col self-center md:self-end">
          {/* Project image */}
          <div className="self-start bg-white border border-black max-w-120 md:w-full mx-r1">
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Project link */}
          <div className="z-1 -mt-r2 self-end relative bg-white px-r1 py-r1 border border-black dashed-outline outline-tang-500">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-r0 font-semibold decoration-1 hover:decoration-transparent underline transition-all"
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
    </div>
  );
}
