import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <div
      id="hero"
      className="w-full flex-1 bg-aqua-100 border-b border-aqua-200"
    >
      <div className="w-full px-[clamp(1rem,3vw,2.5rem)]">
        <div className="grid gap-4 pb-8 pt-6">
          <a href="#page-top" className="inline-block">
            <motion.h1
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="font-mono text-[clamp(2.5rem,8vw,6rem)] font-bold text-aqua-ink"
            >
              Ellie Holt:
            </motion.h1>
          </a>

          <h2 className="font-mono text-[clamp(1.75rem,5vw,3rem)] font-bold text-aqua-ink">
            {`{ front-end web developer }`}
          </h2>

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
