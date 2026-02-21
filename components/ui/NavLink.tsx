import type { ReactNode } from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className="font-mono lowercase tracking-[0.02em]">
      {children}
    </a>
  );
}
