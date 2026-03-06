import SiteHeader from "@/components/layout/SiteHeader/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter/SiteFooter";
import HeroBanner from "@/components/layout/SiteHeader/HeroBanner";
import CopyrightBanner from "@/components/layout/SiteFooter/CopyrightBanner";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-wrapper w-full px-10">
      <HeroBanner />
      <div className="border">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
      <CopyrightBanner />
    </div>
  );
}
