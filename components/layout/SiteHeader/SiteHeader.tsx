"use client";

import Hero from "./Hero";
import Navbar from "./Navbar";

export default function SiteHeader() {
  return (
    <header>
      {/* Big cover hero */}
      <Hero />

      {/* Sticky header region (banner + nav) */}
      <div>
        <Navbar />
      </div>
    </header>
  );
}
