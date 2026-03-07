"use client";

import Icon from "@/components/ui/Icon";
import { useState, useEffect, useRef } from "react";
import { TypewriterEffect } from "@/components/external/aceternity/typewriter-effect";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();
  const isBlogRoute = pathname?.startsWith("/blog") ?? false;
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
  }, []);

  const h1Words = isBlogRoute ? ["Blog", "posts:"] : ["Ellie", "Holt:"];
  const h1Characters = h1Words.reduce((count, word) => count + word.length, 0);
  const h2Words = isBlogRoute
    ? ["{", "thoughts", "and", "musings", "}"]
    : ["{", "front-end", "web", "developer", "}"];
  const h2Characters = h2Words.reduce((count, word) => count + word.length, 0);
  const h1TypeDuration = (h1Characters - 1) * 0.05 + 0.3;
  const h2TypeDuration = (h2Characters - 1) * 0.05 + 0.3;
  const collapseScale = 0.6;
  const arrowCollapseScale = 0.4;
  const currentScale = 1 - (1 - collapseScale) * collapseProgress;
  const currentArrowScale = 1 - (1 - arrowCollapseScale) * collapseProgress;
  const h2Visibility = Math.max(0, 1 - collapseProgress * 2);
  const isCollapsed = collapseProgress > 0.02;
  const arrowHref = isBlogRoute ? "/" : isCollapsed ? "#" : "#content-start";
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
      className="w-full shrink-0 overflow-hidden px-1 outline-1 bg-white outline-black"
      animate={{
        height: heroTargetHeight,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ willChange: "height" }}
    >
      <div ref={heroContentRef} className="w-full px-[clamp(1rem,3vw,2.5rem)]">
        <div className="grid col-2 grid-rows-[auto_auto] ">
          <motion.div
            className="col-start-1 row-start-1"
            animate={{ scale: currentScale }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ transformOrigin: "top left", willChange: "transform" }}
          >
            <div ref={h1ContentRef}>
              <a href={isBlogRoute ? "/" : "#page-top"} className="">
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
                  className="font-mono text-[clamp(2.5rem,8vw,10rem)] font-bold text-aqua-ink"
                  cursorClassName="bg-aqua-ink h-[clamp(2.5rem,8vw,10rem)] relative top-2"
                  transitionDuration={0.3}
                  cursorReps={1}
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="col-start-1 row-start-2 overflow-hidden mb-4 lg:mb-6 -mt-4 md:-mt-6 xl:-mt-10 2xl:-mt-12"
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
            <div ref={h2ContentRef}>
              <TypewriterEffect
                element="h2"
                words={h2Words.map((word, index) => ({
                  text: word,
                  className:
                    index === 0 || index === h2Words.length - 1
                      ? "text-[1.3em] font-plex-mono"
                      : undefined,
                }))}
                className="col-start-1 col-end-2 font-mono text-[clamp(1.75rem,3.15vw,3.75rem)] font-bold text-aqua-ink"
                cursorClassName="bg-aqua-ink h-[clamp(1.75rem,3.15vw,3.75rem)] relative top-1"
                transitionDuration={0.3}
                cursorReps={9}
                startDelay={h1TypeDuration + 0.3}
              />
            </div>
          </motion.div>

          <motion.div
            className={`col-start-2 row-start-1 row-span-2 self-center ${
              isBlogRoute
                ? "justify-self-end mr-[clamp(0.5rem,4vw,3rem)]"
                : "justify-self-end"
            }`}
            animate={{ scale: currentArrowScale }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ transformOrigin: "top right", willChange: "transform" }}
          >
            <motion.a
              ref={arrowContentRef}
              href={arrowHref}
              onClick={handleArrowClick}
              aria-label={
                isBlogRoute
                  ? "Back to portfolio"
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
                animate={{ rotate: isBlogRoute ? 0 : 180 * collapseProgress }}
                whileHover={
                  isBlogRoute ? { x: -10 } : { y: isCollapsed ? -10 : 10 }
                }
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Icon
                  name={isBlogRoute ? "gg:arrow-left" : "gg:arrow-down"}
                  size="clamp(6rem, 14vw, 19rem)"
                  className="block text-tang-500 scale-120 md:-m-[1em] xl:-m-[2em] 2xl:-m-[3em]"
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
