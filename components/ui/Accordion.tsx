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
        "accordion-root w-full border border-black bg-white",
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
      className={cn("border-black flex flex-col", className)}
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
        "w-full cursor-pointer pointer-events-auto select-none px-r1 py-r1 font-mono text-base hover:no-underline hover:bg-aqua-100",
        className,
      )}
      {...props}
    >
      {children}
      <span className="ml-auto h-3 w-3 shrink-0 origin-center transform-gpu group-aria-expanded/accordion-trigger:rotate-180 self-center">
        <RoughCaret
          direction="up"
          stroke="currentColor"
          strokeWidth={1.6}
          roughness={1.2}
          className="pointer-events-none h-full w-full"
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
