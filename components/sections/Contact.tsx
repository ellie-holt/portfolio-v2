import Button from "@/components/ui/Button/Button";
import RoughArrow from "@/components/ui/RoughArrow";
import RoughEnvelope from "@/components/ui/RoughEnvelope";
import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
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
      <div className="section-bar full-bleed-bar">
        <h2 id="contact-heading" className="text-section-heading">
          <span aria-hidden="true">// </span>contact
        </h2>
      </div>

      {/* section content */}
      <div className="split-panel border-b">
        {/* left: contact form */}
        <div className="flex flex-col gap-r2 bg-white px-hpad py-r3">
          <p className="text-section-display">Let’s get in touch.</p>
          <p className="max-w-prose">
            If you'd like to work together or have any questions, send me a
            message and I’ll get back to you.
          </p>

          <form
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            className="gap-r2 grid font-mono"
          >
            <input type="hidden" name="form-name" value="contact" />

            <Field className="gap-r0 grid">
              <FieldLabel htmlFor="name">
                <span className="px-r0 py-0.5 w-fit text-label">Name</span>
              </FieldLabel>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </Field>

            <Field className="gap-r0 grid">
              <FieldLabel htmlFor="email">
                <span className="px-r0 py-0.5 w-fit text-label">Email</span>
              </FieldLabel>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="name@email.com"
                required
                autoComplete="email"
              />
            </Field>

            <Field className="gap-r0 grid">
              <FieldLabel htmlFor="message">
                <span className="px-r0 py-0.5 w-fit text-label">Message</span>
              </FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                required
                rows={5}
              />
            </Field>

            <div className="pt-r0">
              <Button type="submit" className="bg-aqua-100">
                <span>Send message</span>
                <RoughArrow
                  direction="right"
                  stroke="#f27941"
                  strokeWidth={1.4}
                  className="w-8 h-8"
                />
              </Button>
            </div>
          </form>
        </div>

        {/* right: fun animation */}
        <div className="relative flex items-end bg-white px-hpad py-r3 overflow-hidden">
          <div
            aria-hidden="true"
            className="top-r1 right-r1 absolute w-28 h-28 pointer-events-none"
          >
            <RoughEnvelope className="w-full h-full" stroke="#ff935f" />
          </div>
          <p className="sr-only">Drop me a message</p>
          <p className="aria-hidden font-mono font-bold text-[clamp(2.25rem,6vw,4.5rem)] leading-tight">
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
