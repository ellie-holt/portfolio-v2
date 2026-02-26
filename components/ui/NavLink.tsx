"use client";

import type { ReactNode } from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (!href.startsWith("#")) return;

    const targetId = href.slice(1);
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();

    const rootStyles = getComputedStyle(document.documentElement);
    const headerVar = rootStyles
      .getPropertyValue("--site-header-height")
      .trim();
    const cssHeaderHeight = Number.parseFloat(headerVar);
    const stickyHeader = document.querySelector(
      "header.sticky",
    ) as HTMLElement | null;
    const headerHeight = Number.isFinite(cssHeaderHeight)
      ? cssHeaderHeight
      : (stickyHeader?.offsetHeight ?? 0);

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: reduceMotion ? "auto" : "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="font-mono lowercase tracking-[0.02em]"
    >
      {children}
    </a>
  );
}
