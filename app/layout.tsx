import type { Metadata } from "next";
import { rootFontClassName } from "./fonts";

export const metadata: Metadata = {
  title: "Ellie Holt | Portfolio",
  description:
    "Front-end developer focused on accessible, responsive UI. Explore projects and get in touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={rootFontClassName}>
      <body>{children}</body>
    </html>
  );
}
