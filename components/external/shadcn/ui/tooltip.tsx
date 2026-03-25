"use client";

import * as React from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  arrowClassName,
  showArrow = true,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
  arrowClassName?: string;
  showArrow?: boolean;
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center rounded-none has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-none data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 [&_.tooltip-arrow]:size-3 [&_.tooltip-arrow]:rotate-45 [&_.tooltip-arrow]:bg-white [&_.tooltip-arrow]:border-2 [&_.tooltip-arrow]:border-black [&_.tooltip-arrow]:border-t-0 [&_.tooltip-arrow]:border-l-0 [&[data-side=top]_.tooltip-arrow]:translate-x-5 [&[data-side=bottom]_.tooltip-arrow]:-translate-x-5",
          className,
        )}
        {...props}
      >
        {children}
        {showArrow ? (
          <TooltipPrimitive.Arrow asChild>
            <span
              data-slot="tooltip-arrow"
              className={cn(
                "tooltip-arrow -translate-y-1.5 visible data-[state=delayed-open]:hidden data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
                arrowClassName,
              )}
            />
          </TooltipPrimitive.Arrow>
        ) : null}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
