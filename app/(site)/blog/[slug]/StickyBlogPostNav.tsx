"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function StickyBlogPostNav() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setShowBackToTop(window.scrollY > 180);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <div className="sticky top-[calc(var(--site-header-height,40px)+var(--rhythm-3))] min-h-16 flex items-stretch gap-r0">
      <span aria-hidden="true" className="w-1 shrink-0 bg-slate-200" />

      <div className="relative flex-1 pl-r0">
        <motion.a
          href="#content-start"
          initial={false}
          animate={{
            opacity: showBackToTop ? 1 : 0,
            y: showBackToTop ? 0 : -10,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ pointerEvents: showBackToTop ? "auto" : "none" }}
          className="absolute top-0 left-0 py-0.5 text-[0.8rem] tracking-[0.02em] text-aqua-ink/70 font-mono hover:text-aqua-ink transition-colors"
        >
          ↑ back to top
        </motion.a>

        <motion.div
          initial={false}
          animate={{ y: showBackToTop ? 36 : 19 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-0 left-0"
        >
          <Link
            href="/blog"
            className="py-0.5 text-[0.8rem] tracking-[0.02em]] text-aqua-ink/70 font-mono hover:text-aqua-ink transition-colors"
          >
            ← all posts
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
