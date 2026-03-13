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
      className="group inline-flex justify-center items-center p-1 border border-transparent rounded-none focus-visible:outline-none font-mono text-section-heading text-aqua-ink/75 lowercase transition-colors cursor-pointer nav-link"
    >
      <span className="inline-flex justify-center items-center group-active:bg-aqua-200 group-focus-visible:bg-aqua-100 group-hover:bg-aqua-100 group-active:shadow-[var(--shadow-blocky-xs)_var(--color-aqua-400)] group-focus-visible:shadow-[var(--shadow-blocky-xs)_var(--color-aqua-400)] px-r1 py-0.5 border border-transparent group-active:border-black group-focus-visible:border-black group-active:text-aqua-ink group-focus-visible:text-aqua-ink group-hover:text-aqua-ink transition-all nav-link-inner">
        {children}
      </span>
    </a>
  );
}
