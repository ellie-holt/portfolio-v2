"use client";

import Hero from "./Hero";
import Navbar from "./Navbar";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex flex-col ">
      <Hero />
      <Navbar />
    </header>
  );
}
