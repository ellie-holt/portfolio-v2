"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

type SupportedElement =
  | "div"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "section"
  | "article";

type TextAlign = "left" | "center" | "right" | "start" | "end";

export const TypewriterEffect = ({
  element,
  words,
  className,
  cursorClassName,
  transitionDuration,
  cursorReps,
  startDelay,
  charStagger,
  showCursor,
  textAlign,
}: {
  element?: SupportedElement;
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  transitionDuration?: number;
  cursorReps?: number;
  startDelay?: number;
  charStagger?: number;
  showCursor?: boolean;
  textAlign?: TextAlign;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        ".tw-char",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: transitionDuration ?? 0.8,
          delay: stagger(charStagger ?? 0.05, { startDelay: startDelay ?? 0 }),
          ease: "easeInOut",
        },
      );
    }
  }, [animate, isInView, startDelay, transitionDuration, charStagger]);

  const MotionElement =
    (motion as Record<SupportedElement, typeof motion.div>)[element ?? "div"] ??
    motion.div;

  const textAlignClass =
    textAlign === "center"
      ? "text-center"
      : textAlign === "right"
        ? "text-right"
        : textAlign === "start"
          ? "text-start"
          : textAlign === "end"
            ? "text-end"
            : "text-left";

  const renderWords = () => {
    return (
      <div className="inline-grid align-baseline w-full">
        <MotionElement
          aria-hidden
          className={cn(
            "pointer-events-none select-none [grid-area:1/1]",
            textAlignClass,
          )}
        >
          {wordsArray.map((word, idx) => {
            const isLastWord = idx === wordsArray.length - 1;
            return (
              <div key={`ghost-word-${idx}`} className="inline-block">
                {word.text.map((char, index) => (
                  <span
                    key={`ghost-char-${index}`}
                    className={cn(
                      "inline-block dark:text-white text-black opacity-0",
                      word.className,
                    )}
                  >
                    {char}
                  </span>
                ))}
                {!isLastWord ? "\u00A0" : null}
              </div>
            );
          })}
        </MotionElement>

        <MotionElement
          ref={scope}
          className={cn("inline [grid-area:1/1]", textAlignClass)}
        >
          {wordsArray.map((word, idx) => {
            const isLastWord = idx === wordsArray.length - 1;
            return (
              <div key={`word-${idx}`} className="inline-block">
                {word.text.map((char, index) => (
                  <motion.span
                    initial={{}}
                    key={`char-${index}`}
                    className={cn(
                      "tw-char dark:text-white text-black opacity-0 hidden",
                      word.className,
                    )}
                  >
                    {char}
                  </motion.span>
                ))}
                {!isLastWord ? "\u00A0" : null}
              </div>
            );
          })}

          {showCursor !== false ? (
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: transitionDuration ?? 0.8,
                delay: startDelay ?? 0,
                repeat: cursorReps ?? Infinity,
                repeatType: "reverse",
              }}
              className={cn(
                "inline-block w-0.75 h-4 bg-blue-500",
                cursorClassName,
              )}
            ></motion.span>
          ) : null}
        </MotionElement>
      </div>
    );
  };
  return <div className={cn("", className)}>{renderWords()}</div>;
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          const isLastWord = idx === wordsArray.length - 1;
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}
                >
                  {char}
                </span>
              ))}
              {!isLastWord ? "\u00A0" : null}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-1 h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName,
        )}
      ></motion.span>
    </div>
  );
};
