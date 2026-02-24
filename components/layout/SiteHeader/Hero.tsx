import { TypewriterEffect } from "@/components/external/aceternity/typewriter-effect";

export default function Hero() {
  const h1Words = ["Ellie", "Holt:"];
  const h1Characters = h1Words.reduce((count, word) => count + word.length, 0);
  const h1TypeDuration = (h1Characters - 1) * 0.1 + 0.3;

  return (
    <div
      id="hero"
      className="w-full flex-1 bg-aqua-100 px-1 outline-1 outline-black"
    >
      <div className="w-full px-[clamp(1rem,3vw,2.5rem)]">
        <div className="grid gap-4 pb-8 pt-6">
          <a href="#page-top" className="inline-block">
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
              className="font-mono text-[clamp(2.5rem,8vw,6rem)] font-bold text-aqua-ink"
              cursorClassName="bg-aqua-ink h-20 relative top-2"
              cursorReps={1}
            />
          </a>

          <TypewriterEffect
            element="h2"
            words={[
              {
                text: "{",
                className: "text-[1.3em] font-plex-mono",
              },
              {
                text: "front-end",
              },
              {
                text: "web",
              },
              {
                text: "developer",
              },
              {
                text: "}",
                className: "text-[1.3em] font-plex-mono",
              },
            ]}
            className="font-mono text-[clamp(1.75rem,5vw,3rem)] font-bold text-aqua-ink"
            cursorClassName="bg-aqua-ink h-10 relative top-1"
            cursorReps={5}
            startDelay={h1TypeDuration + 0.3}
          />

          <p>
            <a href="#about" aria-label="Skip to about section">
              ↓
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
