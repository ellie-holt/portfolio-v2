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
      className="group inline-flex justify-center items-center gap-r0 px-r1 h-full font-mono data-[active=true]:font-bold hover:font-bold focus-visible:font-bold text-aqua-ink/75 data-[active=true]:text-aqua-ink hover:text-aqua-ink focus-visible:text-aqua-ink lowercase transition-all"
    >
      <RoughAsterisk
        stroke="#f27941"
        strokeWidth={2}
        className="opacity-0 group-data-[active=true]:opacity-100 w-5 h-5 transition-opacity translate-y-[0.07em] duration-150 shrink-0"
      />
      <span className="inline-block, group-hover:underline group-hover:underline-tang-accent">
        {children}
      </span>
    </Element>
  );
}
