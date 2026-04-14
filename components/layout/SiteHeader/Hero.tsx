"use client";

import RoughChunkyOutlineArrow from "@/components/ui/RoughChunkyOutlineArrow";
import { useState, useEffect, useRef } from "react";
import { TypewriterEffect } from "@/components/external/aceternity/typewriter-effect";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Hero() {
  const BREAKPOINT_SM_PX = 640;
  const BREAKPOINT_3XS_PX = 448;

  const pathname = usePathname();
  const isBlogRoute = pathname?.startsWith("/blog") ?? false;
  const isBlogPostRoute = /^\/blog\/.+/.test(pathname ?? "");
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const h2ContentRef = useRef<HTMLDivElement>(null);
  const h1ContentRef = useRef<HTMLDivElement>(null);
  const arrowContentRef = useRef<HTMLAnchorElement>(null);
  const [collapseProgress, setCollapseProgress] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);
  const [h2Height, setH2Height] = useState(0);
  const [h1Height, setH1Height] = useState(0);
  const [arrowHeight, setArrowHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallestScreen, setIsSmallestScreen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [h2AnimationSettled, setH2AnimationSettled] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!heroContentRef.current) return;

    const updateHeight = () => {
      if (!heroContentRef.current) return;
      setHeroHeight(heroContentRef.current.offsetHeight);
    };

    updateHeight();

    const observer = new ResizeObserver(() => {
      updateHeight();
    });

    observer.observe(heroContentRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!h2ContentRef.current) return;

    const updateH2Height = () => {
      if (!h2ContentRef.current) return;
      setH2Height(h2ContentRef.current.offsetHeight);
    };

    updateH2Height();

    const observer = new ResizeObserver(() => {
      updateH2Height();
    });

    observer.observe(h2ContentRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!h1ContentRef.current || !arrowContentRef.current) return;

    const updateHeights = () => {
      if (h1ContentRef.current) {
        setH1Height(h1ContentRef.current.offsetHeight);
      }

      if (arrowContentRef.current) {
        setArrowHeight(arrowContentRef.current.offsetHeight);
      }
    };

    updateHeights();

    const observer = new ResizeObserver(() => {
      updateHeights();
    });

    observer.observe(h1ContentRef.current);
    observer.observe(arrowContentRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isBlogPostRoute) {
      setCollapseProgress(1);
      return;
    }

    const onScroll = () => {
      const collapseDistance = 220;
      const progress = Math.min(
        1,
        Math.max(0, window.scrollY / collapseDistance),
      );
      setCollapseProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isBlogPostRoute]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${BREAKPOINT_SM_PX - 1}px)`,
    );

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${BREAKPOINT_3XS_PX - 1}px)`,
    );

    const handleChange = (event: MediaQueryListEvent) => {
      setIsSmallestScreen(event.matches);
    };

    setIsSmallestScreen(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const isMobileViewport = hasMounted ? isMobile : false;
  const isSmallestViewport = hasMounted ? isSmallestScreen : false;

  const h1Words = isBlogRoute ? ["Blog", "posts:"] : ["Ellie", "Holt:"];
  const h1Characters = h1Words.reduce((count, word) => count + word.length, 0);
  const h2Words = isBlogRoute
    ? ["{", "my", "thoughts", "}"]
    : isMobileViewport
      ? isSmallestViewport
        ? ["{", "web", "dev", "}"]
        : ["{", "web", "developer", "}"]
      : ["{", "front-end", "web", "developer", "}"];
  const h2Characters = h2Words.reduce((count, word) => count + word.length, 0);
  const h1TypeDuration = (h1Characters - 1) * 0.045 + 0.24;
  const h2TypeDuration = (h2Characters - 1) * 0.045 + 0.24;

  useEffect(() => {
    setH2AnimationSettled(false);
    const settleDelayMs = (h1TypeDuration + 0.2 + h2TypeDuration + 0.15) * 1000;
    const timeout = window.setTimeout(() => {
      setH2AnimationSettled(true);
    }, settleDelayMs);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  const shouldInstantRemountH2 = h2AnimationSettled;
  const collapseScale = isMobileViewport ? 0.58 : 0.54;
  const arrowCollapseScale = collapseScale;
  const currentScale = 1 - (1 - collapseScale) * collapseProgress;
  const currentH1Scale =
    currentScale + (isMobileViewport ? 0.06 * collapseProgress : 0);
  const currentArrowScale = 1 - (1 - arrowCollapseScale) * collapseProgress;
  const arrowCenterCompensationY = ((1 - currentArrowScale) * arrowHeight) / 6;
  const arrowMobileShiftX = isMobileViewport ? 16 * (1 - collapseProgress) : 0;
  const h2Visibility = Math.max(0, 1 - collapseProgress);
  const isCollapsed = collapseProgress > 0.02;
  const arrowHref = isBlogPostRoute
    ? "/blog"
    : isBlogRoute
      ? "/"
      : isCollapsed
        ? "#"
        : "#about";
  const scaledHeroHeight = heroHeight ? heroHeight * currentScale : 0;
  const collapsedTargetHeight =
    h1Height && arrowHeight
      ? Math.max(h1Height * currentH1Scale, arrowHeight * currentArrowScale)
      : scaledHeroHeight;
  const heroTargetHeight =
    scaledHeroHeight && collapsedTargetHeight
      ? scaledHeroHeight -
        (scaledHeroHeight - collapsedTargetHeight) * collapseProgress
      : "auto";

  const handleArrowClick: React.MouseEventHandler<HTMLAnchorElement> = (
    event,
  ) => {
    if (isBlogRoute) return;

    if (!isCollapsed) return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      ref={heroRef}
      id="hero"
      className="w-full shrink-0 overflow-hidden border-x bg-aqua-100 border-black"
      animate={{
        height: heroTargetHeight,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{
        willChange: "height",
        minHeight: isMobileViewport && isCollapsed ? "2.5rem" : undefined,
      }}
    >
      <div ref={heroContentRef} className="w-full px-hpad">
        <div
          className={
            isCollapsed
              ? "grid w-full grid-cols-[minmax(0,1fr)_clamp(3.9rem,9vw,13.5rem)] grid-rows-[auto_auto] items-start justify-items-start gap-x-2 sm:gap-x-4"
              : "grid w-full grid-cols-[minmax(0,1fr)_clamp(3.9rem,9vw,13.5rem)] grid-rows-[auto_auto] items-start justify-items-start gap-x-2 sm:gap-x-4"
          }
        >
          <motion.div
            className={`col-start-1 row-start-1 min-w-0 w-full text-left ${
              isCollapsed ? "col-span-1" : "col-span-1"
            } ${isMobileViewport && isCollapsed ? "pt-1.5" : ""}`}
            animate={{ scale: currentH1Scale }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ transformOrigin: "top left", willChange: "transform" }}
          >
            <div ref={h1ContentRef} className="w-full">
              <a
                href={isBlogRoute ? "/" : "#page-top"}
                className="block w-full"
              >
                <TypewriterEffect
                  key={`hero-h1-${isBlogRoute ? "blog" : "site"}`}
                  element="h1"
                  words={[
                    {
                      text: h1Words[0],
                    },
                    {
                      text: h1Words[1],
                    },
                  ]}
                  className="w-full font-mono text-[clamp(2.1rem,3vw,9rem)] 3xs:text-[clamp(2.1rem,8.1vw,8.75rem)] sm:text-[clamp(1.9rem,7.4vw,8.75rem)] font-bold text-black whitespace-nowrap"
                  cursorClassName="bg-aqua-ink h-[clamp(2.3rem,3vw,9rem)] 3xs:h-[clamp(2.1rem,8.1vw,8.75rem)] sm:h-[clamp(1.9rem,7.4vw,8.75rem)] relative top-2"
                  transitionDuration={0.24}
                  cursorReps={1}
                  textAlign="left"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="col-start-1 row-start-2 min-w-0 w-full justify-self-start overflow-hidden mb-2 sm:mb-4 lg:mb-6 -mt-2 3xs:-mt-4 md:-mt-6 xl:-mt-10 2xl:-mt-12"
            animate={{
              scale: currentScale,
              opacity: h2Visibility,
              y: -24 * (1 - h2Visibility),
              height: h2Height ? h2Height * h2Visibility : "auto",
            }}
            transition={{ duration: 0.08, ease: "easeOut" }}
            style={{
              transformOrigin: "top left",
              willChange: "transform, opacity, height",
            }}
          >
            <div ref={h2ContentRef} className="w-full">
              <TypewriterEffect
                key={`${isBlogRoute ? "blog" : "site"}-${
                  isMobileViewport
                    ? isSmallestViewport
                      ? "mobile-small"
                      : "mobile"
                    : "desktop"
                }`}
                element="h2"
                words={h2Words.map((word, index) => ({
                  text: word,
                  className: [
                    index === 0 || index === h2Words.length - 1
                      ? "text-[1.3em] font-plex-mono"
                      : "",
                    isMobileViewport && index === 0 ? "-mr-[0.16em]" : "",
                    isMobileViewport && index === h2Words.length - 1
                      ? "-ml-[0.16em]"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" "),
                }))}
                className="text-black w-full text-left col-start-1 col-end-2 font-mono text-[clamp(1.34rem,5.8vw,3.2rem)] 3xs:text-[clamp(1.16rem,5vw,3.2rem)] sm:text-[clamp(0.95rem,4.1vw,3.2rem)] font-bold"
                cursorClassName="bg-aqua-ink h-[clamp(1.34rem,5.8vw,3.2rem)] 3xs:h-[clamp(1.16rem,5vw,3.2rem)] sm:h-[clamp(0.95rem,4.1vw,3.2rem)] relative top-1"
                transitionDuration={shouldInstantRemountH2 ? 0.01 : 0.24}
                cursorReps={shouldInstantRemountH2 ? 0 : 9}
                charStagger={shouldInstantRemountH2 ? 0 : 0.05}
                startDelay={shouldInstantRemountH2 ? 0 : h1TypeDuration + 0.2}
                showCursor={!shouldInstantRemountH2}
                textAlign="left"
              />
            </div>
          </motion.div>

          <motion.div
            className={
              isCollapsed
                ? `col-start-2 row-start-1 row-span-1 self-center justify-self-end mt-1 3xs:mt-0 ${
                    isBlogRoute
                      ? "mr-[clamp(0.75rem,4.5vw,3.25rem)]"
                      : "mr-[clamp(0.35rem,2vw,1.5rem)]"
                  }`
                : `col-start-2 row-start-1 row-span-2 mt-1 3xs:mt-0 self-center justify-self-end ${
                    isBlogRoute
                      ? "mr-[clamp(0.75rem,4.5vw,3.25rem)]"
                      : "mr-[clamp(0.35rem,2vw,1.5rem)]"
                  }`
            }
            animate={{
              scale: currentArrowScale,
              y:
                isCollapsed && isBlogRoute && isMobileViewport
                  ? 2
                  : isCollapsed
                    ? 0
                    : arrowCenterCompensationY,
              x: arrowMobileShiftX,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              transformOrigin: "top right",
              willChange: "transform",
            }}
          >
            <motion.a
              ref={arrowContentRef}
              href={arrowHref}
              onClick={handleArrowClick}
              aria-label={
                isBlogRoute
                  ? isBlogPostRoute
                    ? "Back to blog"
                    : "Back to portfolio"
                  : isCollapsed
                    ? "Back to top"
                    : "Skip to content"
              }
              className="inline-flex flex-col items-center leading-none relative z-1"
              initial={{
                opacity: 0,
                y: isBlogRoute ? 0 : isCollapsed ? 50 : -50,
                x: isBlogRoute ? 50 : 0,
              }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: h1TypeDuration + h2TypeDuration - 0.5,
              }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  rotate: isBlogRoute ? 0 : 180 * collapseProgress,
                }}
                whileHover={
                  isBlogRoute ? { x: -10 } : { y: isCollapsed ? -10 : 10 }
                }
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <RoughChunkyOutlineArrow
                  direction={isBlogRoute ? "left" : "down"}
                  variant="solid"
                  stroke="#1a0d08CC"
                  fill="#f27941"
                  strokeWidth={
                    isSmallestViewport ? 1.5 : isMobileViewport ? 1.65 : 2
                  }
                  roughness={
                    isSmallestViewport ? 1 : isMobileViewport ? 1.2 : 1.5
                  }
                  className="block h-[clamp(3.35rem,7.8vw,13.5rem)] w-[clamp(3.35rem,7.8vw,13.5rem)] 3xs:h-[clamp(3.6rem,8.4vw,13.5rem)] 3xs:w-[clamp(3.6rem,8.4vw,13.5rem)] sm:h-[clamp(3.9rem,9vw,13.5rem)] sm:w-[clamp(3.9rem,9vw,13.5rem)] scale-100"
                />
              </motion.span>
              {isBlogRoute && !isCollapsed ? (
                <span className="mt-0 sm:mt-0 lg:mt-1 font-mono self-center text-center ml-2 sm:ml-2.5 text-[clamp(0.7rem,2vw,1rem)] lowercase tracking-[0.02em] text-aqua-ink/80">
                  <span className="md:hidden">back</span>
                  <span className="hidden md:inline">back to main</span>
                </span>
              ) : null}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
