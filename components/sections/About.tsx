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
        <div className="px-hpad py-r3 h-full stack-3 bg-tang-wash">
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
        <div className="bg-aqua-wash grid place-content-center place-items-center px-hpad py-r3 w-full">
          <div
            className="relative bg-white px-r1 py-r1 border-2 border-black dashed-outline outline-tang-500 w-full max-w-84"
            aria-label="Photo placeholder"
          >
            <div className="relative bg-slate-100 border border-black/50 border-dashed aspect-4/5 w-full overflow-hidden">
              <Image
                src="/me-4.jpg"
                alt="Portrait of Ellie Holt"
                fill
                sizes="(max-width: 768px) 80vw, 21rem"
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-slate-700 font-mono text-sm mt-r0">
            TODO: Take a professional headshot.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
