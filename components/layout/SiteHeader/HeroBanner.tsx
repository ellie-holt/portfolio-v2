import RoughArrow from "@/components/ui/RoughArrow";
import { CTA_ROUGH_ARROW_PROPS } from "../../ui/roughComponentPresets";

export default function HeroBanner() {
  return (
    <div className="w-full h-10  px-hpad">
      <div className="flex flex-wrap justify-end 2xs:justify-between gap-4 w-full h-full items-center text-sm font-mono">
        <a
          href="mailto:eleanorholt97@gmail.com"
          className="group hidden 2xs:inline-flex items-center"
        >
          <span
            aria-hidden="true"
            className="pr-[0.35em] font-plex-mono text-[1.6em] leading-none text-tang-500 transition-transform duration-300 group-hover:scale-90 group-hover:translate-x-0.5"
          >
            {"{"}
          </span>
          <span className="break-all underline transition-all hover:decoration-transparent">
            eleanorholt97@gmail.com
          </span>
          <span
            aria-hidden="true"
            className="pl-[0.35em] font-plex-mono text-[1.6em] leading-none text-tang-500 transition-transform duration-300 group-hover:scale-90 group-hover:-translate-x-0.5"
          >
            {"}"}
          </span>
        </a>

        <a
          href="https://github.com/ellie-holt"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-r0 font-semibold underline-accent transition-all hover:decoration-transparent"
        >
          <span>GitHub</span>
          <RoughArrow
            {...CTA_ROUGH_ARROW_PROPS}
            className="h-7 w-7 arrow-cta-motion"
          />
        </a>
      </div>
    </div>
  );
}
