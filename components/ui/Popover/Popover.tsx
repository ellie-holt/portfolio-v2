"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import {
  Popover as ShadcnPopover,
  PopoverAnchor as ShadcnPopoverAnchor,
  PopoverContent as ShadcnPopoverContent,
  PopoverTrigger as ShadcnPopoverTrigger,
} from "@/components/external/shadcn/ui/popover";

export function Popover({
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnPopover>) {
  return <ShadcnPopover {...props} />;
}

export function PopoverTrigger({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnPopoverTrigger>) {
  return <ShadcnPopoverTrigger className={className} {...props} />;
}

export function PopoverAnchor({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnPopoverAnchor>) {
  return <ShadcnPopoverAnchor className={className} {...props} />;
}

export function PopoverContent({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnPopoverContent>) {
  return (
    <ShadcnPopoverContent
      className={cn(
        "border-2 border-black bg-white px-r1 py-r1 font-mono shadow-[var(--shadow-blocky-sm)_var(--color-tang-300)]",
        className,
      )}
      {...props}
    />
  );
}
