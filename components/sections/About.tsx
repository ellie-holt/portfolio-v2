import { aboutContent } from "@/data/about";
import Button from "@/components/ui/Button";

export default function About() {
  const content = aboutContent;
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full"
      style={{ scrollMarginTop: "var(--site-header-height, 40px)" }}
    >
      {/* section heading */}
      <div className="w-screen h-10 px-hpad relative -left-10 flex items-center bg-white border-b border-black z-1">
        <h2 id="about-heading" className="font-mono text-lg">
          <span aria-hidden="true">// </span>about
        </h2>
      </div>

      {/* section content */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black">
        {/* left column */}
        <div className="px-hpad py-r3 flex flex-col gap-r2 h-full">
          <h3 className="font-mono text-[clamp(2rem,5vw,3rem)] font-bold leading-tight">
            {content.greeting}
          </h3>

          <p className="max-w-prose leading-relaxed">{content.about}</p>

          <div>
            <h3 className="text-xl leading-snug">
              Here are some things I am interested in:
            </h3>
            <ul
              role="list"
              className="list-disc max-w-prose pl-r2 grid space-y-r1 pt-r1"
            >
              {content.bullets.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* cta link */}
          <div className="mt-auto pt-r3">
            <Button href={content.ctaHref}>{content.ctaText}</Button>
          </div>
        </div>

        {/* right column */}
        <div
          className="w-full bg-white grid place-items-center text-sm font-mono"
          aria-label="Photo placeholder"
        >
          photo
        </div>
      </div>
    </section>
  );
}
