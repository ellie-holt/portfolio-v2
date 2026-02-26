"use client";

import { useEffect, useRef } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

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
