import type React from "react";

export const buttonClass =
  "inline-flex items-center gap-r1 w-fit bg-white border border-black px-5 py-3 font-mono text-lg shadow-[var(--shadow-blocky-sm)_var(--color-tang-300)] hover:shadow-[var(--shadow-blocky-xs)_var(--color-tang-500)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type LinkProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export default function Button(props: LinkProps | ButtonProps) {
  if ("href" in props && props.href) {
    const { children, className, href, ...rest } = props;
    return (
      <a href={href} className={`${buttonClass} ${className ?? ""}`} {...rest}>
        {children}
      </a>
    );
  }

  const {
    children,
    className,
    type = "button",
    ...rest
  } = props as ButtonProps;
  return (
    <button
      type={type}
      className={`${buttonClass} hover:cursor-pointer ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
