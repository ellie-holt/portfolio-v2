import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  heading: string;
  children: ReactNode;
  className?: string;
  barVariant?: "default" | "first";
};

export default function SectionShell({
  id,
  heading,
  children,
  className,
  barVariant = "default",
}: SectionShellProps) {
  const headingId = `${id}-heading`;
  const barClassName =
    barVariant === "first" ? "section-bar-first" : "section-bar";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={className ?? "w-full"}
      style={{
        scrollMarginTop: "calc(var(--site-header-height, 40px) - 2px)",
      }}
    >
      <div className={`${barClassName} full-bleed-bar`}>
        <h2 id={headingId} className="text-section-heading">
          <span aria-hidden="true">// </span>
          {heading}
        </h2>
      </div>

      {children}
    </section>
  );
}
