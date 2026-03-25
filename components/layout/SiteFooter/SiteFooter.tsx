type FooterLink = {
  label: string;
  href: string;
  text: string;
  external?: boolean;
};

const FOOTER_LINKS: FooterLink[] = [
  {
    label: "email",
    href: "mailto:eleanorholt97@gmail.com",
    text: "eleanorholt97@gmail.com",
  },
  {
    label: "github",
    href: "https://github.com/ellie-holt",
    text: "github.com/ellie-holt",
    external: true,
  },
];

function FooterLinkRow({ label, href, text, external }: FooterLink) {
  return (
    <div className="flex justify-center sm:justify-end items-center gap-r1">
      <span className="hidden sm:inline font-bold">{label}:</span>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="group inline-flex items-center"
      >
        <span
          aria-hidden="true"
          className="pr-r0 font-plex-mono text-[1.5em] text-tang-500 leading-none group-hover:scale-90 transition-transform group-hover:translate-x-0.5 duration-300"
        >
          {"{"}
        </span>
        <span className="text-center sm:text-right hover:decoration-transparent underline break-all transition-all">
          {text}
        </span>
        <span
          aria-hidden="true"
          className="pl-r0 font-plex-mono text-[1.5em] text-tang-500 leading-none group-hover:scale-90 transition-transform group-hover:-translate-x-0.5 duration-300"
        >
          {"}"}
        </span>
      </a>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer>
      <div className="px-hpad py-r2 md:py-r3">
        <div className="flex justify-center sm:justify-end">
          <div className="stack-2 font-mono text-sm 4xs:text-base 2xs:text-lg sm:text-2xl">
            {FOOTER_LINKS.map((link) => (
              <FooterLinkRow key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
