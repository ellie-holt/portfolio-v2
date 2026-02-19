export default function SiteFooter() {
  return (
    <footer>
      <div>
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

      <div>
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
    </footer>
  );
}
