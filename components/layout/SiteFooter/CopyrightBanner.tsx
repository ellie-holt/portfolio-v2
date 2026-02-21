export default function CopyrightBanner() {
  return (
    <div className="w-full h-10 bg-white px-[clamp(1rem,3vw,2.5rem)] ">
      <div className="flex flex-wrap justify-between gap-4 w-full h-full items-center text-sm font-mono">
        <p>© {new Date().getFullYear()} Ellie Holt.</p>
        <p>
          Open source{" "}
          <a
            href="https://github.com/ellie-holt/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>
          .
        </p>
      </div>
    </div>
  );
}
