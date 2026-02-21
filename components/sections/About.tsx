import { aboutContent } from "@/data/about";

export default function About() {
  const content = aboutContent;
  return (
    <section id="about" aria-labelledby="about-heading" className="w-full">
      {/* section heading */}
      <div className="w-screen h-10 px-hpad relative -left-10 flex items-center bg-white border-b z-1">
        <h2 id="about-heading" className="font-mono text-lg">
          <span aria-hidden="true">// </span>about
        </h2>
      </div>

      {/* section content */}
      <div className="relative w-full grid grid-cols-2 divide-x divide-black">
        {/* left column */}
        <div className="px-hpad py-10 flex flex-col gap-5 h-full">
          <p className="font-mono text-[clamp(2rem,5vw,3rem)] font-bold leading-tight">
            {content.greeting}
          </p>
          <p className="leading-loose">{content.about}</p>

          <div>
            <h3>Here are some things I am interested in:</h3>
            <ul role="list" className="list-disc pl-5 grid gap-2 py-2 pb-40">
              {content.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* cta link */}
          <div className="absolute bottom-10">
            <a
              href={content.ctaHref}
              className="inline-flex items-center gap-2 w-fit bg-white border border-black px-5 py-3 font-mono text-lg shadow-[var(--shadow-blocky-sm)_var(--color-tang-300)]"
            >
              {content.ctaText}
            </a>
          </div>
        </div>

        {/* right column */}
        <div
          className="w-full  bg-white grid place-items-center text-sm font-mono"
          aria-label="Photo placeholder"
        >
          photo
        </div>
      </div>
    </section>
  );
}
