import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";
import Buffer from "@/components/sections/Buffer";

export default function HomePage() {
  return (
    <main id="content-start" className="flex flex-col">
      <Buffer />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
