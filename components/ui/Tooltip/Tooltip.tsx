"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip as ShadcnTooltip,
  TooltipContent as ShadcnTooltipContent,
  TooltipProvider as ShadcnTooltipProvider,
  TooltipTrigger as ShadcnTooltipTrigger,
} from "@/components/external/shadcn/ui/tooltip";

type TooltipContentProps = ComponentPropsWithoutRef<
  typeof ShadcnTooltipContent
>;

export function TooltipProvider({
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnTooltipProvider>) {
  return <ShadcnTooltipProvider {...props} />;
}

export function Tooltip({
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnTooltip>) {
  return <ShadcnTooltip {...props} />;
}

export function TooltipTrigger({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnTooltipTrigger>) {
  return <ShadcnTooltipTrigger className={className} {...props} />;
}

export function TooltipContent({
  className,
  showArrow = false,
  arrowClassName,
  ...props
}: TooltipContentProps & {
  showArrow?: boolean;
  arrowClassName?: string;
}) {
  return (
    <ShadcnTooltipContent
      showArrow={showArrow}
      arrowClassName={arrowClassName}
      className={cn(
        "rounded-none bg-white text-black ring-0 border-2 border-black px-r1 py-r1 font-sans text-body font-semibold",
        className,
      )}
      {...props}
    />
  );
}
