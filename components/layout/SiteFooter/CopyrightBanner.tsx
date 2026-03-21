export default function CopyrightBanner() {
  return (
    <div className=" px-hpad w-full h-10">
      <div className="flex flex-wrap justify-between items-center gap-4 w-full h-full font-mono text-sm">
        <p>© {new Date().getFullYear()} Ellie Holt.</p>
        <p>
          Open source{" "}
          <a
            href="https://github.com/ellie-holt/portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-r0 font-semibold decoration-1 hover:decoration-transparent underline transition-all"
          >
            code
          </a>
          .
        </p>
      </div>
    </div>
  );
}
