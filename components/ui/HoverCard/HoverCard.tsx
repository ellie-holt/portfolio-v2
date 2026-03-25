"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import {
  HoverCard as ShadcnHoverCard,
  HoverCardContent as ShadcnHoverCardContent,
  HoverCardTrigger as ShadcnHoverCardTrigger,
} from "@/components/external/shadcn/ui/hover-card";

export function HoverCard({
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnHoverCard>) {
  return <ShadcnHoverCard {...props} />;
}

export function HoverCardTrigger({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnHoverCardTrigger>) {
  return <ShadcnHoverCardTrigger className={className} {...props} />;
}

export function HoverCardContent({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnHoverCardContent>) {
  return (
    <ShadcnHoverCardContent
      className={cn(
        "border border-black bg-white px-r1 py-r1 font-mono shadow-[var(--shadow-blocky-sm)_var(--color-aqua-300)]",
        className,
      )}
      {...props}
    />
  );
}
