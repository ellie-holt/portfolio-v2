import Button from "@/components/ui/Button";
import RoughArrow from "@/components/ui/RoughArrow";
import RoughEnvelope from "@/components/ui/RoughEnvelope";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/Field";
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

            <Field className="grid gap-r0">
              <FieldLabel htmlFor="name">
                <span className="w-fit px-r0 py-0.5 text-sm font-semibold uppercase tracking-wide">
                  Name
                </span>
              </FieldLabel>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
                className="h-11 border-black bg-white px-4  shadow-[var(--shadow-blocky-xs)_var(--color-tang-300)] transition-transform focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 focus-visible:shadow-[var(--shadow-blocky-sm)_var(--color-tang-500)]"
              />
            </Field>

            <Field className="grid gap-r0">
              <FieldLabel htmlFor="email">
                <span className="w-fit  px-r0 py-0.5 text-sm font-semibold uppercase tracking-wide">
                  Email
                </span>
              </FieldLabel>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="name@email.com"
                required
                autoComplete="email"
                className="h-11 border-black bg-white px-4 text-sm shadow-[var(--shadow-blocky-xs)_var(--color-tang-300)] transition-transform focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 focus-visible:shadow-[var(--shadow-blocky-sm)_var(--color-tang-500)]"
              />
            </Field>

            <Field className="grid gap-r0">
              <FieldLabel htmlFor="message">
                <span className="w-fit px-r0 py-0.5 text-sm font-semibold uppercase tracking-wide">
                  Message
                </span>
              </FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                required
                rows={5}
                className="min-h-36 border-black bg-white px-4 py-3 text-sm shadow-[var(--shadow-blocky-xs)_var(--color-tang-300)] transition-transform focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 focus-visible:shadow-[var(--shadow-blocky-sm)_var(--color-tang-500)]"
              />
            </Field>

            <div className="pt-r0">
              <Button type="submit" className="bg-aqua-100">
                <span>Send message</span>
                <RoughArrow
                  direction="right"
                  stroke="#f27941"
                  strokeWidth={1.4}
                  className="h-8 w-8"
                />
              </Button>
            </div>
          </form>
        </div>

        {/* right column */}
        <div className="relative px-hpad py-r3 bg-white flex items-end overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-r1 top-r1 h-28 w-28"
          >
            <RoughEnvelope className="h-full w-full" stroke="#ff935f" />
          </div>
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
