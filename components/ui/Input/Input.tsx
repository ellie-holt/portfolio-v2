import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Input as ShadcnInput } from "@/components/external/shadcn/ui/input";

export default function Input({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnInput>) {
  return (
    <ShadcnInput
      className={cn(
        "bg-white shadow-[var(--shadow-blocky-xs)_var(--color-tang-300)] focus-visible:shadow-[var(--shadow-blocky-sm)_var(--color-tang-500)] px-4 border-black h-11 text-base md:text-base transition-all focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}
