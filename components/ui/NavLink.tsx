import Link from "next/link";
import type { ReactNode } from "react";
import RoughAsterisk from "@/components/ui/RoughAsterisk";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

export default function NavLink({
  href,
  children,
  isActive = false,
  onClick,
}: NavLinkProps) {
  const isSectionLink = href.startsWith("/#");

  const Element = isSectionLink ? "a" : Link;

  return (
    <Element
      href={href}
      onClick={onClick}
      data-active={isActive ? "true" : "false"}
      className="group inline-flex justify-center items-center gap-1 4xs:gap-2 3xs:gap-r0 h-full 3xs:px-r1 font-mono data-[active=true]:font-bold hover:font-bold focus-visible:font-bold text-aqua-ink/75 data-[active=true]:text-aqua-ink hover:text-aqua-ink focus-visible:text-aqua-ink text-sm 3xs:text-base lowercase transition-all"
    >
      <RoughAsterisk
        stroke="#f27941"
        strokeWidth={2}
        className="w-3 4xs:w-4 3xs:w-5 h-3 4xs:h-4 3xs:h-5 opacity-0 group-data-[active=true]:opacity-100 transition-opacity translate-y-[0.07em] duration-150 shrink-0"
      />
      <span className="inline-block group-hover:underline-accent">
        {children}
      </span>
    </Element>
  );
}
