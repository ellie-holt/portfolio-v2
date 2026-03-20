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
        "relative flex items-center justify-center h-42 border border-black rounded-tl-md rounded-bl-md cursor-pointer",
        "transition-[width,margin,background-color,color] duration-200 ease-out",
        isActive
          ? "z-20 w-16 bg-white text-aqua-ink border-r-white"
          : "z-0 w-13 bg-aqua-200 text-aqua-ink/75  hover:w-14 hover:bg-aqua-100 hover:text-aqua-ink",
        className,
      )}
      {...props}
    >
      <span className="[writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 font-mono font-bold text-base tracking-wide leading-none">
        {children}
      </span>
    </button>
  );
}
