export default function SiteFooter() {
  return (
    <footer className="bg-aqua-wash">
      <div className="grid w-full px-[clamp(1rem,3vw,2.5rem)] py-8 md:grid-cols-2 md:items-start">
        <div className="grid gap-2">
          <p>
            email:{" "}
            <a href="mailto:eleanorholt97@gmail.com">eleanorholt97@gmail.com</a>
          </p>
          <p>
            github:{" "}
            <a
              href="https://github.com/ellie-holt"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ellie-holt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
