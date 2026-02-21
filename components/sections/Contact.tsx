export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="w-full">
      {/* section heading */}
      <div className="w-screen h-10 px-hpad relative -left-10 flex items-center bg-white border-b border-t z-1">
        <h2 id="contact-heading" className="font-mono text-lg">
          <span aria-hidden="true">// </span>contact
        </h2>
      </div>

      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black border-b">
        {/* left column */}
        <div className="px-hpad py-10 flex flex-col gap-6">
          <p className="font-mono text-[clamp(2rem,5vw,3rem)] font-bold leading-tight">
            Let's get in touch!
          </p>
          <p className="leading-loose">
            If you'd like to work together or have any questions, send a message
            and I’ll get back to you.
          </p>

          <form
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            className="grid gap-4 font-mono"
          >
            <input type="hidden" name="form-name" value="contact" />

            <label className="grid gap-2">
              <span className="uppercase text-sm">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
                className="bg-white border border-black px-4 py-3"
              />
            </label>

            <label className="grid gap-2">
              <span className="uppercase text-sm">Email</span>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                required
                autoComplete="email"
                className="bg-white border border-black px-4 py-3"
              />
            </label>

            <label className="grid gap-2">
              <span className="uppercase text-sm">Message</span>
              <textarea
                name="message"
                placeholder="Type your message here..."
                required
                rows={5}
                className="bg-white border border-black px-4 py-3"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-2 w-fit bg-white border border-black px-5 py-3 font-mono text-lg shadow-[var(--shadow-blocky-sm)_var(--color-tang-300)]"
            >
              Send
            </button>
          </form>
        </div>

        {/* right column */}
        <div className="px-hpad py-10 bg-white flex items-end">
          <p className="font-mono text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight">
            Drop me a message.
          </p>
        </div>
      </div>
    </section>
  );
}
