export default function SiteFooter() {
  return (
    <footer className="">
      <div className="px-hpad py-r3">
        <div className="flex justify-center sm:justify-end">
          <div className="gap-r2 grid font-mono text-lg sm:text-2xl">
            <div className="flex justify-center sm:justify-end items-center gap-r1">
              <span className="hidden sm:inline font-bold">email:</span>
              <a
                href="mailto:eleanorholt97@gmail.com"
                className="group inline-flex items-center"
              >
                <span
                  aria-hidden="true"
                  className="pr-[0.2em] font-plex-mono text-[1.5em] text-tang-500 leading-none group-hover:scale-90 transition-transform group-hover:translate-x-0.5 duration-300"
                >
                  {"{"}
                </span>
                <span className="text-center sm:text-right hover:decoration-transparent underline break-all transition-all">
                  eleanorholt97@gmail.com
                </span>
                <span
                  aria-hidden="true"
                  className="pl-[0.2em] font-plex-mono text-[1.5em] text-tang-500 leading-none group-hover:scale-90 transition-transform group-hover:-translate-x-0.5 duration-300"
                >
                  {"}"}
                </span>
              </a>
            </div>

            <div className="flex justify-center sm:justify-end items-center gap-r1">
              <span className="hidden sm:inline font-bold">github:</span>
              <a
                href="https://github.com/ellie-holt"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center"
              >
                <span
                  aria-hidden="true"
                  className="pr-[0.2em] font-plex-mono text-[1.5em] text-tang-500 leading-none group-hover:scale-90 transition-transform group-hover:translate-x-0.5 duration-300"
                >
                  {"{"}
                </span>
                <span className="text-center sm:text-right hover:decoration-transparent underline break-all transition-all">
                  github.com/ellie-holt
                </span>
                <span
                  aria-hidden="true"
                  className="pl-[0.2em] font-plex-mono text-[1.5em] text-tang-500 leading-none group-hover:scale-90 transition-transform group-hover:-translate-x-0.5 duration-300"
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
