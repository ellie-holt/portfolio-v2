"use client";

import { useId, useState } from "react";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import RoughArrow from "@/components/ui/RoughArrow";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  expanded?: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
  className?: string;
  imageLayoutId?: string;
};

export default function ProjectCard({
  project,
  expanded,
  onExpand,
  onCollapse,
  className,
  imageLayoutId,
}: ProjectCardProps) {
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState(false);
  const isExpanded = expanded ?? uncontrolledExpanded;
  const detailsId = useId();

  const handleExpand = () => {
    if (onExpand) {
      onExpand();
      return;
    }

    setUncontrolledExpanded(true);
  };

  const handleCollapse = () => {
    if (onCollapse) {
      onCollapse();
      return;
    }

    setUncontrolledExpanded(false);
  };

  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className={cn(
        "relative bg-white border border-black overflow-hidden",
        isExpanded && "h-full flex flex-col",
        className,
      )}
    >
      <motion.figure
        layout={!!imageLayoutId}
        layoutId={imageLayoutId}
        className={cn(
          "relative bg-white overflow-hidden",
          isExpanded ? "max-h-88 lg:max-h-104" : "h-full min-h-0",
        )}
      >
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          <motion.img
            src={project.image.src}
            alt={project.image.alt}
            className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-[1.015]"
            loading="lazy"
          />
        </a>

        {!isExpanded ? (
          <div className="absolute right-r1 bottom-r1">
            <button
              type="button"
              aria-expanded={isExpanded}
              aria-controls={detailsId}
              onClick={handleExpand}
              className="inline-flex items-center gap-r0 border border-black bg-white px-r1 py-r0 font-mono text-base hover:cursor-pointer"
            >
              <span>more</span>
              <RoughArrow
                direction="right"
                stroke="#f27941"
                strokeWidth={1.4}
                className="h-6 w-6"
              />
            </button>
          </div>
        ) : null}
      </motion.figure>

      <div
        id={detailsId}
        className={`grid transition-all duration-300 ease-out ${isExpanded ? "grid-rows-[auto_auto_auto_auto]" : "grid-rows-[0fr]"}`}
      >
        <div className={`${isExpanded ? "opacity-100" : "opacity-0"} min-h-0 transition-opacity duration-200`}>
          <header className="bg-white border-t border-black">
            <div className="px-r2 py-r1 flex items-start justify-between gap-r1">
              <h3
                id={`${project.slug}-title`}
                className="font-mono font-bold text-2xl sm:text-3xl leading-tight"
              >
                {project.title}
              </h3>
              <button
                type="button"
                aria-label={`Collapse ${project.title} details`}
                onClick={handleCollapse}
                className="border border-black bg-white px-r0 py-0.5 text-xs font-mono uppercase tracking-wide hover:cursor-pointer"
              >
                less
              </button>
            </div>
          </header>

          <div className="bg-white border-t border-black">
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

          <div className="px-r2 py-r1 md:py-r2 leading-relaxed border-t border-black">
            <p className="max-w-prose">{project.description}</p>
          </div>

          <div className="bg-aqua-wash w-full overflow-hidden border-t border-black">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-labelledby={`${project.slug}-title`}
              className="flex items-center justify-end gap-r1 ml-auto py-r1 px-r2 font-semibold underline decoration-1 hover:decoration-transparent transition-all"
            >
              <span className="text-xl lowercase">view project</span>
              <RoughArrow
                direction="right"
                stroke="#f27941"
                strokeWidth={1.4}
                className="h-7 w-7"
              />
              <span className="sr-only">
                {" "}
                {project.title} - opens in a new tab
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
