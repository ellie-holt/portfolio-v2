import RoughArrow from "@/components/ui/RoughArrow";
import { CTA_ROUGH_ARROW_PROPS } from "../../ui/roughComponentPresets";

export default function HeroBanner() {
  return (
    <div className="w-full h-8 2xs:h-10 px-hpad">
      <div className="flex flex-wrap justify-end 2xs:justify-between items-center gap-4 w-full h-full font-mono text-xs 2xs:text-sm">
        <a
          href="mailto:eleanorholt97@gmail.com"
          className="group hidden 2xs:inline-flex items-center"
        >
          <span
            aria-hidden="true"
            className="pr-[0.35em] font-plex-mono text-[1.6em] text-tang-500 leading-none group-hover:scale-90 transition-transform group-hover:translate-x-0.5 duration-300"
          >
            {"{"}
          </span>
          <span className="hover:decoration-transparent underline break-all transition-all">
            eleanorholt97@gmail.com
          </span>
          <span
            aria-hidden="true"
            className="pl-[0.35em] font-plex-mono text-[1.6em] text-tang-500 leading-none group-hover:scale-90 transition-transform group-hover:-translate-x-0.5 duration-300"
          >
            {"}"}
          </span>
        </a>

        <a
          href="https://github.com/ellie-holt"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-r0 font-semibold hover:decoration-transparent underline-accent transition-all"
        >
          <span>GitHub</span>
          <RoughArrow
            {...CTA_ROUGH_ARROW_PROPS}
            className="w-7 h-7 arrow-cta-motion"
          />
        </a>
      </div>
    </div>
  );
}
