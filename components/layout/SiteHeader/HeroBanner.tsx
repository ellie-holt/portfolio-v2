export default function HeroBanner() {
  return (
    <div className="w-full h-10 bg-white px-hpad">
      <div className="flex flex-wrap justify-between gap-4 w-full h-full items-center text-sm font-mono">
        <a
          href="mailto:eleanorholt97@gmail.com"
          className="group inline-flex items-center"
        >
          <span
            aria-hidden="true"
            className="pr-[0.35em] text-tang-500 text-[1.6em] leading-none transition-transform duration-300 group-hover:scale-90 group-hover:translate-x-0.5 font-plex-mono"
          >
            {"{"}
          </span>
          <span className="break-all underline transition-all hover:decoration-transparent">
            eleanorholt97@gmail.com
          </span>
          <span
            aria-hidden="true"
            className="pl-[0.35em] text-tang-500 text-[1.6em] leading-none transition-transform duration-300 group-hover:scale-90 group-hover:-translate-x-0.5 font-plex-mono"
          >
            {"}"}
          </span>
        </a>

        <a
          href="https://github.com/ellie-holt"
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}
