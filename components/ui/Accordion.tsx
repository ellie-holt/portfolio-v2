"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import RoughCaret from "@/components/ui/RoughCaret";
import {
  Accordion as ShadcnAccordion,
  AccordionItem as ShadcnAccordionItem,
  AccordionTrigger as ShadcnAccordionTrigger,
  AccordionContent as ShadcnAccordionContent,
} from "@/components/external/shadcn/ui/accordion";

export function Accordion({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnAccordion>) {
  return (
    <ShadcnAccordion
      className={cn(
        "bg-white border border-black w-full accordion-root",
        className,
      )}
      {...props}
    />
  );
}

export function AccordionItem({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnAccordionItem>) {
  return (
    <ShadcnAccordionItem
      className={cn("flex flex-col border-black", className)}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnAccordionTrigger>) {
  return (
    <ShadcnAccordionTrigger
      className={cn(
        "hover:bg-aqua-100 px-r1 py-r1 w-full font-mono text-base hover:no-underline cursor-pointer pointer-events-auto select-none",
        className,
      )}
      {...props}
    >
      {children}
      <span className="self-center ml-auto w-3 h-3 transform-gpu group-aria-expanded/accordion-trigger:rotate-180 origin-center shrink-0">
        <RoughCaret
          direction="up"
          stroke="currentColor"
          strokeWidth={1.6}
          roughness={1.2}
          className="w-full h-full pointer-events-none"
        />
      </span>
    </ShadcnAccordionTrigger>
  );
}

export function AccordionContent({
  contentClassName,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnAccordionContent> & {
  contentClassName?: string;
}) {
  return (
    <ShadcnAccordionContent
      className={cn(
        "origin-bottom data-[state=open]:animate-[accordion-fade-in_180ms_ease-out]",
        className,
      )}
      contentClassName={cn(
        "px-r1 font-mono text-sm leading-relaxed",
        contentClassName,
      )}
      {...props}
    />
  );
}
