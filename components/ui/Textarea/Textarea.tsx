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
        "w-full min-h-36 px-4 py-3 text-sm sm:text-base form-control-base",
        className,
      )}
      {...props}
    />
  );
}
