import Button from "@/components/ui/Button/Button";
import RoughArrow from "@/components/ui/RoughArrow";
import { Field, FieldLabel } from "@/components/ui/Field/Field";
import Input from "@/components/ui/Input/Input";
import Textarea from "@/components/ui/Textarea/Textarea";
import { CTA_ROUGH_ARROW_PROPS } from "@/components/ui/roughComponentPresets";

export default function ContactForm() {
  return (
    <form name="contact" method="POST" action="/" className="font-mono stack-2">
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
            {...CTA_ROUGH_ARROW_PROPS}
            className="w-8 h-8 arrow-cta-motion"
          />
        </Button>
      </div>
    </form>
  );
}
