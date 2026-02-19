export type Project = {
  slug: string;
  title: string;
  description: string;
  liveUrl: string;
  stack: string[];
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
    stack: ["React", "Tailwind", "SCSS", "OpenWeatherMap API"],
    image: {
      src: "/images/weather-app-square.png",
      alt: "Weather App interface screenshot",
    },
  },
  {
    slug: "world-clock",
    title: "World Clock",
    description:
      "A world clock with time-of-day theming and responsive layout.",
    liveUrl: "https://findthetime.netlify.app/",
    stack: ["HTML/CSS", "JavaScript", "Moment.js"],
    image: {
      src: "/images/world-clock-square.png",
      alt: "World Clock interface screenshot",
    },
  },
  {
    slug: "ai-poet",
    title: "AI Poet",
    description: "Generates short poems from prompts via an AI API.",
    liveUrl: "https://aipoet.netlify.app/",
    stack: ["HTML/CSS", "JavaScript", "AI API"],
    image: {
      src: "/images/ai-poet-square.png",
      alt: "AI Poet interface screenshot",
    },
  },
];
