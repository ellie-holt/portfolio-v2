export default function SiteFooter() {
  return (
    <footer className="bg-aqua-wash ">
      <div className="px-hpad py-r3 sm:py-[clamp(3rem,8vw,6rem)]">
        <div className="flex justify-center sm:justify-end">
          <div className="grid gap-r2 text-lg sm:text-2xl font-mono">
            <div className="flex items-center justify-center sm:justify-end gap-r1">
              <span className="hidden sm:inline font-bold">email:</span>
              <a
                href="mailto:eleanorholt97@gmail.com"
                className="group inline-flex items-center "
              >
                <span
                  aria-hidden="true"
                  className="pr-[0.2em] text-tang-500 text-[1.5em] leading-none transition-transform duration-300 group-hover:scale-90 group-hover:translate-x-0.5 font-plex-mono"
                >
                  {"{"}
                </span>
                <span className="break-all text-center sm:text-right underline transition-all hover:decoration-transparent">
                  eleanorholt97@gmail.com
                </span>
                <span
                  aria-hidden="true"
                  className="pl-[0.2em] text-tang-500 text-[1.5em] leading-none transition-transform duration-300 group-hover:scale-90 group-hover:-translate-x-0.5 font-plex-mono"
                >
                  {"}"}
                </span>
              </a>
            </div>

            <div className="flex items-center justify-center sm:justify-end gap-r1">
              <span className="hidden sm:inline font-bold">github:</span>
              <a
                href="https://github.com/ellie-holt"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center "
              >
                <span
                  aria-hidden="true"
                  className="pr-[0.2em] text-tang-500 text-[1.5em] leading-none transition-transform duration-300 group-hover:scale-90 group-hover:translate-x-0.5 font-plex-mono"
                >
                  {"{"}
                </span>
                <span className="break-all text-center sm:text-right underline transition-all hover:decoration-transparent">
                  github.com/ellie-holt
                </span>
                <span
                  aria-hidden="true"
                  className="pl-[0.2em] text-tang-500 text-[1.5em] leading-none transition-transform duration-300 group-hover:scale-90 group-hover:-translate-x-0.5 font-plex-mono"
                >
                  {"}"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
