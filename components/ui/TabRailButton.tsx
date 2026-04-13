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
  const label =
    typeof children === "string"
      ? children.split(" ").map((word, index) => (
          <span key={`${word}-${index}`} className="block">
            {word}
          </span>
        ))
      : children;

  return (
    <button
      type="button"
      className={cn(
        "relative flex items-center justify-center w-[clamp(4.4rem,25vw,6rem)] 3xs:w-[clamp(4.4rem,27vw,8.2rem)] xs:w-40 lg:h-36! border border-black rounded-tl-lg lg:rounded-bl-lg rounded-tr-lg lg:rounded-tr-none cursor-pointer",
        "transition-[width,height,margin,background-color,color] duration-200 ease-out",
        isActive
          ? "z-20 h-15 3xs:h-14 lg:w-17 bg-tang-wash text-aqua-ink border-b-white lg:border-b-black lg:border-r-tang-wash"
          : "z-0 h-13 3xs:h-12 lg:w-15 bg-aqua-100 text-aqua-ink/75 hover:h-14 hover:3xs:h-13 lg:hover:w-16 hover:bg-aqua-wash hover:text-aqua-ink",
        className,
      )}
      {...props}
    >
      <span className="text-center lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed] lg:rotate-180 font-mono font-bold text-base tracking-wide leading-[0.95]">
        {label}
      </span>
    </button>
  );
}
