export default function CopyrightBanner() {
  return (
    <div className="w-full h-8 2xs:h-10 px-hpad">
      <div className="flex flex-wrap justify-between items-center 2xs:gap-4 w-full h-full font-mono text-xs 2xs:text-sm">
        <p>© {new Date().getFullYear()} Ellie Holt.</p>
        <p>
          Open source{" "}
          <a
            href="https://github.com/ellie-holt/portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-r0 font-semibold hover:decoration-transparent underline underline-accent transition-all"
          >
            code
          </a>
          .
        </p>
      </div>
    </div>
  );
}
