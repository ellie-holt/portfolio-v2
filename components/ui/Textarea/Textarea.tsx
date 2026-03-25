import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Textarea as ShadcnTextarea } from "@/components/external/shadcn/ui/textarea";

export default function Textarea({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnTextarea>) {
  return (
    <ShadcnTextarea
      className={cn(
        "bg-white shadow-[var(--shadow-blocky-xs)_var(--color-tang-300)] focus-visible:shadow-[var(--shadow-blocky-sm)_var(--color-tang-500)] px-4 py-3 border-black min-h-36 text-sm sm:text-base transition-all focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}
