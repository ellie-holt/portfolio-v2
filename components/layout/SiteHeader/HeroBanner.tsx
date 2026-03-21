import RoughArrow from "@/components/ui/RoughArrow";

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
          className="inline-flex items-center gap-r0 font-semibold underline decoration-1 transition-all hover:decoration-transparent"
        >
          <span>GitHub</span>
          <RoughArrow
            direction="right"
            stroke="#f27941"
            strokeWidth={2}
            className="h-7 w-7"
          />
        </a>
      </div>
    </div>
  );
}
