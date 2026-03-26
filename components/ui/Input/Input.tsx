import type { ComponentPropsWithoutRef } from "react";
import { Input as ShadcnInput } from "@/components/external/shadcn/ui/input";

export default function Input({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnInput>) {
  return (
    <ShadcnInput
      className={`h-10 lg:h-11 xl:h-12 px-4 py-1 w-full min-w-0 form-control-base text-sm sm:text-base ${className ?? ""}`}
      {...props}
    />
  );
}
