import type { ComponentPropsWithoutRef } from "react";
import { Input as ShadcnInput } from "@/components/external/shadcn/ui/input";

export default function Input({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnInput>) {
  return (
    <ShadcnInput
      className={`h-10 lg:h-11 xl:h-12 px-4 border-black bg-white shadow-[var(--shadow-blocky-xs)_var(--color-tang-300)] focus-visible:shadow-[var(--shadow-blocky-sm)_var(--color-tang-500)] text-sm sm:text-base transition-all focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 ${className ?? ""}`}
      {...props}
    />
  );
}
