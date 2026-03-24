"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "../../ui/NavLink";

const SECTION_IDS = ["about", "work", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

function isSectionId(value: string): value is SectionId {
  return SECTION_IDS.includes(value as SectionId);
}

export default function NavbarRewrite() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<SectionId | "">("");
  const [clickedSection, setClickedSection] = useState<SectionId | "">("");
  const clickedSectionTimeoutRef = useRef<number | null>(null);

  const isHome = pathname === "/";
  const isBlogActive = pathname.startsWith("/blog");
  const visibleSection = clickedSection || activeSection;

  const handleSectionLinkClick = (section: SectionId) => {
    setClickedSection(section);

    if (clickedSectionTimeoutRef.current !== null) {
      window.clearTimeout(clickedSectionTimeoutRef.current);
    }

    clickedSectionTimeoutRef.current = window.setTimeout(() => {
      setClickedSection("");
      clickedSectionTimeoutRef.current = null;
    }, 650);
  };

  useEffect(() => {
    console.log("effect ran");
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const getHeaderHeight = () => {
      const cssValue = getComputedStyle(document.documentElement)
        .getPropertyValue("--site-header-height")
        .trim();
      const parsed = parseFloat(cssValue);
      return Number.isFinite(parsed) ? parsed : 40;
    };

    const getActiveSectionFromScroll = (): SectionId | "" => {
      if (window.scrollY <= 1 && !window.location.hash) {
        return "";
      }

      const headerHeight = getHeaderHeight();
      let currentSection: SectionId | "" = "";

      for (const sectionId of SECTION_IDS) {
        const section = document.getElementById(sectionId);
        if (!section) continue;
        if (section.offsetTop <= window.scrollY + headerHeight) {
          currentSection = sectionId;
        }
      }
      return currentSection;
    };

    const syncActiveSectionToHash = () => {
      const hash = window.location.hash.slice(1);

      if (isSectionId(hash)) {
        setActiveSection((prev) => (prev === hash ? prev : hash));
        return;
      }

      setActiveSection((prev) => (prev === "" ? prev : ""));
    };

    const syncActiveSectionToScroll = () => {
      const activeFromScroll = getActiveSectionFromScroll();
      setActiveSection((prev) =>
        prev === activeFromScroll ? prev : activeFromScroll,
      );
    };

    const setInitialActiveSection = () => {
      const hash = window.location.hash.slice(1);

      if (isSectionId(hash)) {
        setActiveSection((prev) => (prev === hash ? prev : hash));
        return;
      }

      const activeFromScroll = getActiveSectionFromScroll();

      setActiveSection((prev) =>
        prev === activeFromScroll ? prev : activeFromScroll,
      );
    };

    setInitialActiveSection();

    window.addEventListener("hashchange", syncActiveSectionToHash);
    window.addEventListener("scroll", syncActiveSectionToScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("hashchange", syncActiveSectionToHash);
      window.removeEventListener("scroll", syncActiveSectionToScroll);
    };
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (clickedSectionTimeoutRef.current !== null) {
        window.clearTimeout(clickedSectionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="relative bg-tang-wash px-hpad border-black border-t-2 border-b-2 w-screen h-10 full-bleed-bar">
      <div className="right-4 sm:right-0 flex md:justify-end items-center h-full">
        <ul className="flex justify-between md:justify-end md:gap-6 m-0 px-0 w-full md:w-auto list-none">
          <li>
            <NavLink
              href="/#about"
              isActive={isHome && visibleSection === "about"}
              onClick={() => handleSectionLinkClick("about")}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/#work"
              isActive={isHome && visibleSection === "work"}
              onClick={() => handleSectionLinkClick("work")}
            >
              work
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/#contact"
              isActive={isHome && visibleSection === "contact"}
              onClick={() => handleSectionLinkClick("contact")}
            >
              contact
            </NavLink>
          </li>
          <li>
            <NavLink href="/blog" isActive={isBlogActive}>
              blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
