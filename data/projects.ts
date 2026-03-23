export type Project = {
  slug: string;
  title: string;
  description: string;
  liveUrl: string;
  sourceUrl: string;
  stack: string[];
  accent: string;
  image: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    slug: "weather-app",
    title: "Weather App",
    description:
      "A responsive, accessible weather app with dynamic theming and geolocation support.",
    liveUrl: "https://herecomestherainagain.netlify.app/",
    sourceUrl: "https://github.com/ellie-holt/react-weather-app",
    stack: ["React", "Tailwind", "SCSS", "OpenWeatherMap API"],
    accent: "var(--color-tang-500)",
    image: {
      src: "/weather-app-square.png",
      alt: "Weather App interface screenshot",
    },
  },
  {
    slug: "world-clock",
    title: "World Clock",
    description:
      "A world clock with a responsive CSS Grid layout and time-of-day theming.",
    liveUrl: "https://findthetime.netlify.app/",
    sourceUrl: "https://github.com/ellie-holt/world-clock",
    stack: ["HTML/CSS", "JavaScript", "Moment.js"],
    accent: "var(--color-aqua-500)",
    image: {
      src: "/world-clock-square.png",
      alt: "World Clock interface screenshot",
    },
  },
  {
    slug: "ai-poet",
    title: "AI Poet",
    description:
      "A fun little app that generates short poems from prompts via an AI API.",
    liveUrl: "https://aipoet.netlify.app/",
    sourceUrl: "https://github.com/ellie-holt/poem-generator",
    stack: ["HTML/CSS", "JavaScript", "SheCodes AI API"],
    accent: "var(--color-azure-500)",
    image: {
      src: "/ai-poet-square.png",
      alt: "AI Poet interface screenshot",
    },
  },
];
