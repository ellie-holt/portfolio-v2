import { aboutContent } from "@/data/about";
import Button from "@/components/ui/Button";
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
        <div className="flex flex-col gap-r2 bg-white px-hpad py-r3 h-full">
          <h3 className="text-section-display">
            {content.greeting}
          </h3>

          <p className="max-w-prose">{content.about}</p>

          <div>
            <h3>Here are some things I am interested in:</h3>
            <ul
              role="list"
              className="space-y-r1 grid pt-r1 pl-r2 max-w-prose list-disc"
            >
              {content.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* cta link */}
          <div className="mt-auto pt-r3">
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
          className="place-items-center grid bg-white w-full font-mono text-sm"
          aria-label="Photo placeholder"
        >
          photo
        </div>
      </div>
    </section>
  );
}
