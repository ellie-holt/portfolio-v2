import type { Project } from "@/data/projects";
import Image from "next/image";
import RoughArrow from "@/components/ui/RoughArrow";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip/Tooltip";
import { CTA_ROUGH_ARROW_PROPS } from "../../ui/roughComponentPresets";

type WorkProjectPreviewProps = {
  project: Project;
  surfaceClassName?: string;
};

export default function WorkProjectPreview({
  project,
}: WorkProjectPreviewProps) {
  return (
    <div className="relative h-full bg-tang-wash">
      <div className="relative flex md:flex-row flex-col items-end gap-r2 h-full px-r2 py-r2 md:divide-x divide-y md:divide-y-0 divide-dashed">
        {/* Project details on the left */}
        <div className="flex-1 self-center stack-1 2xs:w-[clamp(26rem,75%,30rem)] md:w-auto md:h-7/8 md:mr-r1 p-r1">
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
                  className="px-2 py-1 border border-tang-400 bg-tang-100 font-mono"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          {/* Project source code link */}
          <div className="font-mono text-body">
            View{" "}
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-r0 font-semibold hover:decoration-transparent underline-accent transition-all"
            >
              code
            </a>{" "}
            on GitHub.
          </div>
        </div>

        {/* Project preview/cta on the right */}
        <div className="group flex flex-col flex-2 self-center md:self-end min-w-0 w-full">
          {/* Project image */}
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-square min-w-0 w-full max-w-md md:max-w-180 lg:max-w-160 self-end sm:mx-r1 border border-black bg-white overflow-hidden"
                  aria-label={`${project.title} - opens in a new tab`}
                >
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1024px) 40rem, (min-width: 768px) 45rem, 95vw"
                    className="w-full h-full min-w-0 object-contain bg-[#E0E6EB]"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </TooltipTrigger>

              <TooltipContent
                side="top"
                align="end"
                showArrow={true}
                className="hidden md:block"
              >
                Open site in new tab ↗
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Project link */}
          <div className="z-1 relative self-end -mt-r2 px-r1 py-r1 border-2 border-black outline-tang-500 dashed-outline bg-white">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-r0 font-semibold decoration-1 hover:decoration-transparent group-hover:decoration-transparent underline transition-all"
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
