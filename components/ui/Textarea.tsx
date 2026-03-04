import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Textarea as ShadcnTextarea } from "@/components/external/shadcn/ui/textarea";

export function Textarea({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnTextarea>) {
  return (
    <ShadcnTextarea
      className={cn("text-base md:text-base", className)}
      {...props}
    />
  );
}
