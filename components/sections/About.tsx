import { aboutContent } from "@/data/about";
import Button from "@/components/ui/Button/Button";
import RoughArrow from "@/components/ui/RoughArrow";
import RoughAsterisk from "@/components/ui/RoughAsterisk";
import SectionShell from "@/components/sections/SectionShell";

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
                  <RoughAsterisk
                    className="mt-1 h-4 w-4 shrink-0"
                    stroke="#f27941"
                    strokeWidth={2}
                  />
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
                direction="right"
                stroke="#f27941"
                strokeWidth={2.2}
                className="w-8 h-8 transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>

        {/* right: photo */}
        <div
          className="bg-aqua-wash place-items-center grid  px-hpad py-r3 w-full font-mono text-azure-ink/60 text-sm"
          aria-label="Photo placeholder"
        >
          photo
        </div>
      </div>
    </SectionShell>
  );
}
