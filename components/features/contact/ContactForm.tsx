"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button/Button";
import RoughArrow from "@/components/ui/RoughArrow";
import { Field, FieldLabel } from "@/components/ui/Field/Field";
import Input from "@/components/ui/Input/Input";
import Textarea from "@/components/ui/Textarea/Textarea";
import { CTA_ROUGH_ARROW_PROPS } from "@/components/ui/roughComponentPresets";

type ContactErrorCode =
  | "INVALID_JSON"
  | "MISSING_FIELDS"
  | "INVALID_EMAIL_FORMAT"
  | "FIELD_TOO_LONG";

type ContactResponse =
  | { ok: true; message: string }
  | { ok: false; error: { code: ContactErrorCode; message: string } };

function getTrimmedField(formData: FormData, key: string): string {
  const value = formData.get(key);

  if (typeof value !== "string") {
    throw new Error(`Invalid form field: ${key}`);
  }

  return value.trim();
}

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [showSubmittingHint, setShowSubmittingHint] = useState(false);

  const submittingHintTimerRef = useRef<number | null>(null);
  const successResetTimerRef = useRef<number | null>(null);

  // Clear any pending timers on unmount
  useEffect(() => {
    return () => {
      if (submittingHintTimerRef.current !== null) {
        window.clearTimeout(submittingHintTimerRef.current);
      }
      if (successResetTimerRef.current !== null) {
        window.clearTimeout(successResetTimerRef.current);
      }
    };
  }, []);

  // Handle form submission
  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setMessage("");
    setStatus("submitting");
    setShowSubmittingHint(false);

    // Clear any existing timers
    if (successResetTimerRef.current !== null) {
      window.clearTimeout(successResetTimerRef.current);
      successResetTimerRef.current = null;
    }
    if (submittingHintTimerRef.current !== null) {
      window.clearTimeout(submittingHintTimerRef.current);
      submittingHintTimerRef.current = null;
    }

    // Show submitting hint if submission takes longer than 100ms
    submittingHintTimerRef.current = window.setTimeout(() => {
      setShowSubmittingHint(true);
    }, 100);

    try {
      const formData = new FormData(form);

      const data = {
        name: getTrimmedField(formData, "name"),
        email: getTrimmedField(formData, "email"),
        message: getTrimmedField(formData, "message"),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: ContactResponse = await response.json();

      if (!result.ok) {
        setMessage(result.error.message);
        setStatus("error");
        return;
      }

      setMessage(result.message);
      setStatus("success");
      form.reset();

      successResetTimerRef.current = window.setTimeout(() => {
        setStatus("idle");
        setMessage("");
        successResetTimerRef.current = null;
      }, 3500);
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Something went wrong. Please try again.");
      setStatus("error");
    } finally {
      if (submittingHintTimerRef.current !== null) {
        window.clearTimeout(submittingHintTimerRef.current);
        submittingHintTimerRef.current = null;
      }
      setShowSubmittingHint(false);
    }
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      aria-busy={status === "submitting"}
      className="font-mono stack-2"
    >
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
        <Button
          type="submit"
          className="relative"
          disabled={status === "submitting"}
        >
          <span className="inline-flex items-center gap-r0">
            <span
              aria-hidden="true"
              className={`absolute left-3 w-2 h-2 rounded-full bg-tang-500 animate-ping transition-opacity ${
                showSubmittingHint ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>{" "}
          Send message
          <RoughArrow
            {...CTA_ROUGH_ARROW_PROPS}
            className="w-8 h-8 arrow-cta-motion"
          />
        </Button>
      </div>

      {/* Status messages for screen readers and visual feedback */}
      <div
        aria-live="polite"
        role={status === "error" ? "alert" : "status"}
        className="min-h-[2em]"
      >
        {status === "success" && <p className="text-aqua-600">{message}</p>}
        {status === "error" && <p className="text-amber-900">{message}</p>}
      </div>
    </form>
  );
}
