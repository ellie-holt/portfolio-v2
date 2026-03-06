"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.location.hash) return;

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    const align = () => {
      target.scrollIntoView({ block: "start", behavior: "auto" });
    };

    const raf = window.requestAnimationFrame(align);
    const timeout = window.setTimeout(align, 420);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  useEffect(() => {
    if (!headerRef.current) return;

    const updateHeaderHeightVar = () => {
      if (!headerRef.current) return;
      const headerHeight = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${headerHeight}px`,
      );

      if (navRef.current) {
        document.documentElement.style.setProperty(
          "--site-nav-height",
          `${navRef.current.offsetHeight}px`,
        );
      }
    };

    updateHeaderHeightVar();

    const observer = new ResizeObserver(() => {
      updateHeaderHeightVar();
    });

    observer.observe(headerRef.current);
    window.addEventListener("resize", updateHeaderHeightVar);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeaderHeightVar);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-10 flex flex-col ">
      <Hero />
      <div ref={navRef}>
        <Navbar />
      </div>
    </header>
  );
}
