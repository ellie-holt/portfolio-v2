export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="w-full">
      <div className="w-full px-[clamp(1rem,3vw,2.5rem)] py-16 grid gap-5">
        <h2 id="contact-heading">Contact</h2>

        <p>
          If you'd like to work together or have any questions, feel free to get
          in touch.
        </p>

        <p>
          Email:{" "}
          <a href="mailto:eleanorholt97@gmail.com">eleanorholt97@gmail.com</a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/ellie-holt"
            target="_blank"
            rel="noreferrer"
          >
            github.com/ellie-holt
          </a>
        </p>
      </div>
    </section>
  );
}
