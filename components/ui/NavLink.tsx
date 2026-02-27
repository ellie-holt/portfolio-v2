import type { ReactNode } from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="nav-link group inline-flex cursor-pointer items-center justify-center rounded-none border border-transparent p-1 font-mono lowercase tracking-[0.02em] text-aqua-ink/75 transition-colors focus-visible:outline-none"
    >
      <span className="nav-link-inner inline-flex items-center justify-center border border-transparent px-r1 py-0.5 transition-all group-hover:bg-aqua-100 group-hover:text-aqua-ink group-active:border-black group-active:bg-aqua-200 group-active:text-aqua-ink group-active:shadow-[var(--shadow-blocky-xs)_var(--color-aqua-400)] group-focus-visible:border-black group-focus-visible:bg-aqua-100 group-focus-visible:text-aqua-ink group-focus-visible:shadow-[var(--shadow-blocky-xs)_var(--color-aqua-400)]">
        {children}
      </span>
    </a>
  );
}
