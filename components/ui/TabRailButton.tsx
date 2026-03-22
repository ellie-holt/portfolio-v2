import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TabRailButtonProps = {
  isActive?: boolean;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export default function TabRailButton({
  isActive = false,
  className,
  children,
  ...props
}: TabRailButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "relative flex items-center justify-center w-[clamp(5rem,30vw,7.2rem)] 3xs:w-[clamp(5rem,32vw,10rem)] 2xs:w-42 lg:h-42! border border-black rounded-tl-lg lg:rounded-bl-lg rounded-tr-lg lg:rounded-tr-none cursor-pointer",
        "transition-[width,height,margin,background-color,color] duration-200 ease-out",
        isActive
          ? "z-20 h-15 3xs:h-13 lg:w-16 bg-tang-wash text-aqua-ink border-b-white lg:border-b-black lg:border-r-tang-wash"
          : "z-0 h-12 3xs:h-11 lg:w-13 bg-aqua-100 text-aqua-ink/75 hover:h-13 hover:3xs:h-12 lg:hover:w-14 hover:bg-aqua-wash hover:text-aqua-ink",
        className,
      )}
      {...props}
    >
      <span className="lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed] lg:rotate-180 font-mono font-bold text-base tracking-wide leading-none">
        {children}
      </span>
    </button>
  );
}
