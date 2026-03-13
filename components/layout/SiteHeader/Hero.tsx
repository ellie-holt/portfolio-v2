"use client";

import RoughChunkyOutlineArrow from "@/components/ui/RoughChunkyOutlineArrow";
import { useState, useEffect, useRef } from "react";
import { TypewriterEffect } from "@/components/external/aceternity/typewriter-effect";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Hero() {
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
  const [h2AnimationSettled, setH2AnimationSettled] = useState(false);

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
    const mediaQuery = window.matchMedia("(max-width: 639px)");

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

  const h1Words = isBlogRoute ? ["Blog", "posts:"] : ["Ellie", "Holt:"];
  const h1Characters = h1Words.reduce((count, word) => count + word.length, 0);
  const h2Words = isBlogRoute
    ? ["{", "thoughts", "and", "musings", "}"]
    : isMobile
      ? ["{", "web", "developer", "}"]
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
  const collapseScale = isMobile ? 0.58 : 0.54;
  const arrowCollapseScale = isMobile ? 0.38 : 0.32;
  const currentScale = 1 - (1 - collapseScale) * collapseProgress;
  const currentArrowScale = 1 - (1 - arrowCollapseScale) * collapseProgress;
  const arrowCenterCompensationY = ((1 - currentArrowScale) * arrowHeight) / 6;
  const arrowMobileShiftX = isMobile ? 16 * (1 - collapseProgress) : 0;
  const h2Visibility = Math.max(0, 1 - collapseProgress * 2);
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
      ? Math.max(h1Height * currentScale, arrowHeight * currentArrowScale)
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
      className="w-full shrink-0 overflow-hidden border-x bg-white border-black"
      animate={{
        height: heroTargetHeight,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ willChange: "height" }}
    >
      <div ref={heroContentRef} className="w-full px-hpad">
        <div
          className={
            isCollapsed
              ? "grid w-full grid-cols-[minmax(0,1fr)_auto] grid-rows-[auto_auto] items-start justify-items-start"
              : "grid grid-cols-1 grid-rows-[auto_auto_auto] place-items-center sm:place-items-start sm:grid-cols-[1fr_auto] sm:grid-rows-[auto_auto]"
          }
        >
          <motion.div
            className={`col-start-1 row-start-1 min-w-0 w-full text-center ${
              isCollapsed ? "col-span-1" : "col-span-1"
            }`}
            animate={{ scale: currentScale }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ transformOrigin: "top left", willChange: "transform" }}
          >
            <div ref={h1ContentRef} className="w-full">
              <a
                href={isBlogRoute ? "/" : "#page-top"}
                className="block w-full"
              >
                <TypewriterEffect
                  element="h1"
                  words={[
                    {
                      text: h1Words[0],
                    },
                    {
                      text: h1Words[1],
                    },
                  ]}
                  className="w-full font-mono text-[12vw] sm:text-[clamp(2.6rem,8vw,10rem)] font-bold text-aqua-ink whitespace-nowrap"
                  cursorClassName="bg-aqua-ink h-[12vw] sm:h-[clamp(2.6rem,8vw,10rem)] relative top-2"
                  transitionDuration={0.24}
                  cursorReps={1}
                  textAlign={isMobile ? "center" : "left"}
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="col-start-1 row-start-2 min-w-0 w-full justify-self-start overflow-hidden sm:mb-4 lg:mb-6 -mt-4 md:-mt-6 xl:-mt-10 2xl:-mt-12"
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
                key={`${isBlogRoute ? "blog" : "site"}-${isMobile ? "mobile" : "desktop"}`}
                element="h2"
                words={h2Words.map((word, index) => ({
                  text: word,
                  className: [
                    index === 0 || index === h2Words.length - 1
                      ? "text-[1.3em] font-plex-mono"
                      : "",
                    isMobile && index === 0 ? "-mr-[0.16em]" : "",
                    isMobile && index === h2Words.length - 1
                      ? "-ml-[0.16em]"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" "),
                }))}
                className="w-full text-left col-start-1 col-end-2 font-mono text-[7vw] sm:text-[clamp(1.75rem,3.15vw,3.75rem)] font-bold text-aqua-ink"
                cursorClassName="bg-aqua-ink h-[7vw] sm:h-[clamp(1.75rem,3.15vw,3.75rem)] relative top-1"
                transitionDuration={shouldInstantRemountH2 ? 0.01 : 0.24}
                cursorReps={shouldInstantRemountH2 ? 0 : 9}
                charStagger={shouldInstantRemountH2 ? 0 : 0.05}
                startDelay={shouldInstantRemountH2 ? 0 : h1TypeDuration + 0.2}
                showCursor={!shouldInstantRemountH2}
                textAlign={isMobile && !isCollapsed ? "center" : "left"}
              />
            </div>
          </motion.div>

          <motion.div
            className={
              isCollapsed
                ? `col-start-2 row-start-1 row-span-2 self-center justify-self-end -mt-0.5 sm:mt-0 ${
                    isBlogRoute
                      ? "mr-[clamp(0.75rem,4.5vw,3.25rem)]"
                      : "mr-[clamp(0.35rem,2vw,1.5rem)]"
                  }`
                : `col-start-1 row-start-3 mt-2 justify-self-center sm:col-start-2 sm:row-start-1 sm:row-span-2 sm:mt-0 sm:self-center sm:justify-self-end ${
                    isBlogRoute
                      ? "mr-0 sm:mr-[clamp(0.75rem,4.5vw,3.25rem)]"
                      : "mr-0 sm:mr-[clamp(0.35rem,2vw,1.5rem)]"
                  }`
            }
            animate={{
              scale: currentArrowScale,
              y: arrowCenterCompensationY,
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
                  fill="#f27840"
                  strokeWidth={2}
                  roughness={1.5}
                  className="block h-[clamp(5.4rem,12.5vw,17rem)] w-[clamp(5.4rem,12.5vw,17rem)] scale-100"
                />
              </motion.span>
              {isBlogRoute && !isCollapsed ? (
                <span className="-mt-1 sm:mt-0 lg:mt-8 font-mono self-end text-[clamp(0.62rem,1.8vw,0.9rem)] lowercase tracking-[0.02em] text-aqua-ink/80">
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
