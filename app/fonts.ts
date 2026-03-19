import { Geist, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

export const monaspaceNeon = localFont({
  src: "../assets/fonts/Monaspace_Neon_Var.woff2",
  variable: "--font-monaspace-neon",
  weight: "200 800",
  display: "swap",
});

export const monaspaceArgon = localFont({
  src: "../assets/fonts/Monaspace_Argon_Var.woff2",
  variable: "--font-monaspace-argon",
  weight: "200 800",
  display: "swap",
});

export const monaspaceXenon = localFont({
  src: "../assets/fonts/Monaspace_Xenon_Var.woff2",
  variable: "--font-monaspace-xenon",
  weight: "200 800",
  display: "swap",
});

export const monaspaceRadon = localFont({
  src: "../assets/fonts/Monaspace_Radon_Var.woff2",
  variable: "--font-monaspace-radon",
  weight: "200 800",
  display: "swap",
});

export const monaspaceKrypton = localFont({
  src: "../assets/fonts/Monaspace_Krypton_Var.woff2",
  variable: "--font-monaspace-krypton",
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
  monaspaceArgon.variable,
  monaspaceNeon.variable,
  monaspaceXenon.variable,
  monaspaceRadon.variable,
  monaspaceKrypton.variable,
  geistSans.variable,
  ibmPlexMono.variable,
  "antialiased",
].join(" ");
