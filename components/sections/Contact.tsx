import Button from "@/components/ui/Button/Button";
import RoughArrow from "@/components/ui/RoughArrow";
import { Field, FieldLabel } from "@/components/ui/Field/Field";
import Input from "@/components/ui/Input/Input";
import Textarea from "@/components/ui/Textarea/Textarea";
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
      <div className="border-b split-panel">
        {/* left: contact form */}
        <div className="bg-tang-wash px-hpad py-r3 h-full stack-3">
          <div className="stack-1">
            <p className="text-section-display">Let’s get in touch!</p>
            <p className="max-w-prose text-body">
              If you'd like to work together or have any questions, send me a
              message and I’ll get back to you.
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            className="font-mono stack-2"
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

            <div className="pt-r1">
              <Button type="submit" className="">
                <span>Send message</span>
                <RoughArrow
                  direction="right"
                  stroke="#f27941"
                  strokeWidth={2.2}
                  className="w-8 h-8"
                />
              </Button>
            </div>
          </form>
        </div>

        {/* right: fun animation */}
        <div className="hidden relative sm:flex items-end bg-aqua-wash px-hpad py-r3 overflow-hidden">
          <div
            aria-hidden="true"
            className="top-r1 right-r1 absolute w-28 h-28 pointer-events-none"
          ></div>
          <p className="sr-only">Drop me a message</p>
          <p
            aria-hidden="true"
            className="font-mono font-bold text-[clamp(2.25rem,6vw,4.5rem)] leading-tight"
          >
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
