import ContactForm from "../features/contact/ContactForm";
import * as motion from "motion/react-client";
import SectionShell from "./SectionShell";

export default function Contact() {
  return (
    <SectionShell id="contact" heading="contact">
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

          <ContactForm />
        </div>

        {/* right: fun animation */}
        <div className="hidden relative md:flex items-end bg-aqua-wash px-hpad py-r3 overflow-hidden">
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
    </SectionShell>
  );
}
