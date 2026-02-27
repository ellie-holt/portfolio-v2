import Button from "@/components/ui/Button";

import * as motion from "motion/react-client";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full"
      style={{ scrollMarginTop: "calc(var(--site-header-height, 40px) - 2px)" }}
    >
      {/* section heading */}
      <div className="w-screen h-10 px-hpad relative -left-10 flex items-center bg-white border-b border-black border-t z-1">
        <h2 id="contact-heading" className="font-mono text-lg">
          <span aria-hidden="true">// </span>contact
        </h2>
      </div>

      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black border-b border-black">
        {/* left column */}
        <div className="px-hpad py-r3 flex flex-col gap-r2">
          <p className="font-mono text-[clamp(2rem,5vw,3rem)] font-bold leading-tight">
            Let’s get in touch.
          </p>
          <p className="max-w-prose leading-relaxed">
            If you'd like to work together or have any questions, send me a
            message and I’ll get back to you.
          </p>

          <form
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            className="grid gap-r2 font-mono"
          >
            <input type="hidden" name="form-name" value="contact" />

            <label className="grid gap-r0">
              <span className="uppercase text-sm">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
                className="bg-white border border-black px-4 py-r0"
              />
            </label>

            <label className="grid gap-r0">
              <span className="uppercase text-sm">Email</span>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                required
                autoComplete="email"
                className="bg-white border border-black px-4 py-r0"
              />
            </label>

            <label className="grid gap-r0">
              <span className="uppercase text-sm">Message</span>
              <textarea
                name="message"
                placeholder="Type your message here..."
                required
                rows={5}
                className="bg-white border border-black px-4 py-r0"
              />
            </label>

            <Button type="submit">Send</Button>
          </form>
        </div>

        {/* right column */}
        <div className="px-hpad py-r3 bg-white flex items-end">
          <p className="sr-only">Drop me a message</p>
          <p className="aria-hidden font-mono text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight">
            <motion.span
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 1.5,
                delay: 0.2,
              }}
              // viewport={{ once: true }}
              className="inline-block"
            >
              Drop
            </motion.span>{" "}
            me a message.
          </p>
        </div>
      </div>
    </section>
  );
}
