import { aboutContent } from "@/data/about";
import Button from "@/components/ui/Button/Button";
import RoughArrow from "@/components/ui/RoughArrow";

export default function About() {
  const content = aboutContent;
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full"
      style={{ scrollMarginTop: "calc(var(--site-header-height, 40px) - 2px)" }}
    >
      {/* section heading */}
      <div className="section-bar full-bleed-bar">
        <h2 id="about-heading" className="text-section-heading">
          <span aria-hidden="true">// </span>about
        </h2>
      </div>

      {/* section content */}
      <div className="split-panel">
        {/* left: intro and cta */}
        <div className="px-hpad py-r3 h-full stack-3">
          <div className="stack-1">
            <h3 className="text-section-display">{content.greeting}</h3>
            <p className="max-w-prose text-body">{content.about}</p>
          </div>

          <div className="stack-1">
            <h3 className="text-section-alt">
              Here are some things I am interested in:
            </h3>
            <ul
              role="list"
              className="gap-r1 grid pl-r2 max-w-[58ch] text-body marker:text-tang-500 list-disc"
            >
              {content.bullets.map((item) => (
                <li key={item}>{item}</li>
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
                strokeWidth={1.4}
                className="w-8 h-8"
              />
            </Button>
          </div>
        </div>

        {/* right: photo */}
        <div
          className="place-items-center grid bg-white px-hpad py-r3 w-full font-mono text-aqua-ink/60 text-sm"
          aria-label="Photo placeholder"
        >
          photo
        </div>
      </div>
    </section>
  );
}
