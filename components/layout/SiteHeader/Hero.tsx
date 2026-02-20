import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <div id="hero">
      {/* Utility row */}
      <div>
        <a href="mailto:eleanorholt97@gmail.com">eleanorholt97@gmail.com</a>

        <a
          href="https://github.com/ellie-holt"
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>
      </div>

      {/* Big title area */}
      <div>
        <a href="#page-top">
          <motion.h1 animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
            Ellie Holt:
          </motion.h1>
        </a>

        <h2>{`{ front-end web developer }`}</h2>

        <p>
          <a href="#about" aria-label="Skip to about section">
            ↓
          </a>
        </p>
      </div>
    </div>
  );
}
