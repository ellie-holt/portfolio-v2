import { aboutContent } from "@/data/about";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import RoughArrow from "@/components/ui/RoughArrow";
import RoughAsterisk from "@/components/ui/RoughAsterisk";
import SectionShell from "@/components/sections/SectionShell";
import {
  CTA_ROUGH_ARROW_PROPS,
  ROUGH_ASTERISK_MARKER_PROPS,
} from "../ui/roughComponentPresets";

export default function About() {
  const content = aboutContent;
  return (
    <SectionShell id="about" heading="about">
      {/* section content */}
      <div className="split-panel">
        {/* left: intro and cta */}
        <div className="stack-3 h-full px-hpad py-r3 bg-tang-wash">
          <div className="stack-1">
            <h3 className="text-section-display">{content.greeting}</h3>
            <p className="max-w-prose text-body">{content.about}</p>
          </div>

          <div className="stack-2">
            <h3 className="text-section-alt">
              Here are some things I care about:
            </h3>

            <ul role="list" className="grid gap-r1 max-w-[58ch] text-body">
              {content.bullets.map((item) => (
                <li key={item} className="flex items-start gap-r0">
                  <RoughAsterisk {...ROUGH_ASTERISK_MARKER_PROPS} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* cta link */}
          <div className="mt-auto pt-r1">
            <Button href={content.ctaHref}>
              <span>{content.ctaText}</span>
              <RoughArrow
                {...CTA_ROUGH_ARROW_PROPS}
                className="w-8 h-8 arrow-cta-motion"
              />
            </Button>
          </div>
        </div>

        {/* right: photo */}
        <div className="grid place-items-center w-full px-r3 md:px-hpad py-r3 bg-aqua-wash">
          <div
            className="relative w-full max-w-84 my-r2 md:my-0 p-r1 border-2 border-black outline-tang-500 dashed-outline bg-white"
            aria-label="Photo placeholder"
          >
            <div className="relative p-r1 w-full h-full aspect-4/5 overflow-hidden border border-black/50 border-dashed bg-slate-100">
              <Image
                src="/me-4.jpg"
                alt="Portrait of Ellie Holt"
                fetchPriority="high"
                loading="eager"
                fill
                sizes="(max-width: 768px) 80vw, 21rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
