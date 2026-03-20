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
        "relative flex items-center justify-center w-42 md:h-42! border border-black rounded-tl-md md:rounded-bl-md rounded-tr-md md:rounded-tr-none cursor-pointer",
        "transition-[width,height,margin,background-color,color] duration-200 ease-out",
        isActive
          ? "z-20 h-13 md:w-16 bg-white text-aqua-ink border-b-white md:border-b-black md:border-r-white"
          : "z-0 h-11 md:w-13 bg-aqua-200 text-aqua-ink/75 hover:h-12 md:hover:w-14 hover:bg-aqua-100 hover:text-aqua-ink",
        className,
      )}
      {...props}
    >
      <span className="md:[writing-mode:vertical-rl] md:[text-orientation:mixed] md:rotate-180 font-mono font-bold text-base tracking-wide leading-none">
        {children}
      </span>
    </button>
  );
}
