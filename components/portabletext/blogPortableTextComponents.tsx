import type { PortableTextComponents } from "@portabletext/react";
import RoughAsterisk from "../ui/RoughAsterisk";
import { ROUGH_ASTERISK_MARKER_PROPS } from "../ui/roughComponentPresets";

type LinkMarkValue = {
  href?: string;
};

export const blogPortableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="my-r1 text-aqua-ink leading-8 text-body">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-r3 mb-r1 md:mb-r2 font-mono text-aqua-ink text-[clamp(1.35rem,3vw,2rem)] leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-r2 mb-r1 font-mono text-aqua-ink text-[clamp(1.15rem,2.4vw,1.6rem)] leading-tight">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-r2 border-l-2 border-black pl-r1 text-aqua-ink/80 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-r2 grid gap-r1 text-body">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-r2 grid gap-r1 text-body [counter-reset:item]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-r0 text-aqua-ink">
        <RoughAsterisk {...ROUGH_ASTERISK_MARKER_PROPS} />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="flex items-start gap-r0 text-aqua-ink before:mt-1 before:w-4 before:shrink-0 before:font-mono before:font-bold before:leading-none before:text-tang-500 before:[counter-increment:item] before:content-[counter(item)'.']">
        <div>{children}</div>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-aqua-ink">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => (
      <span className="underline-accent">{children}</span>
    ),

    link: ({ children, value }) => {
      const href = (value as LinkMarkValue | undefined)?.href;
      const isExternal = Boolean(href?.startsWith("http"));

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="text-aqua-ink underline-accent transition-all hover:decoration-transparent"
        >
          {children}
        </a>
      );
    },
  },
};
