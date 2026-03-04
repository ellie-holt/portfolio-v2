import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Input as ShadcnInput } from "@/components/external/shadcn/ui/input";

export function Input({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnInput>) {
  return (
    <ShadcnInput
      className={cn("text-base md:text-base", className)}
      {...props}
    />
  );
}
