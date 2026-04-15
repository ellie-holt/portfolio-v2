import { Geist, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

export const monaspaceNeon = localFont({
  src: "../assets/fonts/Monaspace_Neon_Var.woff2",
  variable: "--font-monaspace-neon",
  weight: "200 800",
  display: "swap",
});

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: "700",
});

export const rootFontClassName = [
  monaspaceNeon.variable,
  geistSans.variable,
  ibmPlexMono.variable,
  "antialiased",
].join(" ");
