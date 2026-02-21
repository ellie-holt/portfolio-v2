import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <About />
      <Work />
      <Contact />
    </main>
  );
}
