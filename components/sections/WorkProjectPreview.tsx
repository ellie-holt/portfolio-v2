import type { Project } from "@/data/projects";
import RoughArrow from "@/components/ui/RoughArrow";
import { CTA_ROUGH_ARROW_PROPS } from "../ui/roughComponentPresets";

type WorkProjectPreviewProps = {
  project: Project;
  surfaceClassName?: string;
};

export default function WorkProjectPreview({
  project,
}: WorkProjectPreviewProps) {
  return (
    <div className="relative bg-tang-wash h-full">
      <div className="relative flex md:flex-row flex-col items-end gap-r2 px-r2 py-r2 md:divide-x divide-y md:divide-y-0 divide-dashed h-full">
        {/* Project details on the left */}
        <div className="flex-1 self-center md:mr-r1 p-r1 2xs:w-[clamp(26rem,75%,30rem)] md:w-auto md:h-7/8 stack-1">
          {/* Project title */}
          <h3 className="hidden md:block text-section-alt">{project.title}</h3>
          {/* Project description */}
          <div className="">
            <p className="max-w-prose text-body">{project.description}</p>
          </div>
          {/* Project stack */}
          <div className="">
            <ul
              aria-label="Technologies used"
              className="flex flex-wrap gap-r0 font-mono text-chip"
            >
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="bg-tang-100 px-2 py-1 border border-tang-400 font-mono"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project preview/cta on the right */}
        <div className="flex flex-col flex-2 self-center md:self-end">
          {/* Project image */}
          <div className="self-end bg-white mx-r1 border border-black md:w-[clamp(24rem,95%,45rem)] lg:w-[clamp(22rem,95%,40rem)] max-w-110">
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Project link */}
          <div className="z-1 relative self-end bg-white -mt-r2 px-r1 py-r1 border-2 border-black dashed-outline outline-tang-500">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-r0 font-semibold decoration-1 hover:decoration-transparent underline transition-all"
            >
              <span className="text-action lowercase">view project</span>
              <RoughArrow
                {...CTA_ROUGH_ARROW_PROPS}
                className="w-7 h-7 arrow-cta-motion"
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
