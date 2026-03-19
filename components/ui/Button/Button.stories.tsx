import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";
import RoughArrow from "../RoughArrow";
import { cn } from "@/lib/utils";

const surfaceToneClasses = {
  white: "bg-white text-black",
  aqua: "bg-aqua-100 text-aqua-ink",
  azure: "bg-azure-100 text-azure-ink",
  tang: "bg-tang-100 text-tang-ink",
} as const;

const shadowToneClasses = {
  tang: "shadow-[var(--shadow-blocky-sm)_var(--color-tang-300)] hover:shadow-[var(--shadow-blocky-xs)_var(--color-tang-500)]",
  aqua: "shadow-[var(--shadow-blocky-sm)_var(--color-aqua-300)] hover:shadow-[var(--shadow-blocky-xs)_var(--color-aqua-500)]",
  azure:
    "shadow-[var(--shadow-blocky-sm)_var(--color-azure-300)] hover:shadow-[var(--shadow-blocky-xs)_var(--color-azure-500)]",
  black:
    "shadow-[var(--shadow-blocky-sm)_var(--color-black)] hover:shadow-[var(--shadow-blocky-xs)_var(--color-black)]",
} as const;

const arrowStrokeColors = {
  tang: "var(--color-tang-500)",
  aqua: "var(--color-aqua-500)",
  azure: "var(--color-azure-500)",
  black: "var(--color-black)",
} as const;

type ButtonStoryArgs = {
  label: string;
  as: "button" | "link";
  href: string;
  type: "button" | "submit" | "reset";
  disabled: boolean;
  surfaceTone: keyof typeof surfaceToneClasses;
  shadowTone: keyof typeof shadowToneClasses;
  showArrow: boolean;
  arrowPosition: "start" | "end";
  arrowDirection: "up" | "down" | "left" | "right";
  arrowColor: keyof typeof arrowStrokeColors;
};

function StoryButton({
  label,
  as,
  href,
  type,
  disabled,
  surfaceTone,
  shadowTone,
  showArrow,
  arrowPosition,
  arrowDirection,
  arrowColor,
}: ButtonStoryArgs) {
  const arrow = showArrow ? (
    <RoughArrow
      direction={arrowDirection}
      stroke={arrowStrokeColors[arrowColor]}
      strokeWidth={1.4}
      className="h-8 w-8 shrink-0"
    />
  ) : null;

  const content = (
    <>
      {arrowPosition === "start" ? arrow : null}
      <span>{label}</span>
      {arrowPosition === "end" ? arrow : null}
    </>
  );

  const className = cn(
    surfaceToneClasses[surfaceTone],
    shadowToneClasses[shadowTone],
  );

  if (as === "link") {
    return (
      <Button href={href || "#"} className={className}>
        {content}
      </Button>
    );
  }

  return (
    <Button type={type} disabled={disabled} className={className}>
      {content}
    </Button>
  );
}

const meta = {
  title: "UI/Button",
  component: StoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Click me",
    as: "button",
    href: "/",
    type: "button",
    disabled: false,
    surfaceTone: "white",
    shadowTone: "tang",
    showArrow: false,
    arrowPosition: "end",
    arrowDirection: "right",
    arrowColor: "tang",
  },
  argTypes: {
    label: {
      control: "text",
    },
    as: {
      control: "inline-radio",
      options: ["button", "link"],
    },
    href: {
      control: "text",
    },
    type: {
      control: "inline-radio",
      options: ["button", "submit", "reset"],
    },
    disabled: {
      control: "boolean",
    },
    surfaceTone: {
      control: "select",
      options: Object.keys(surfaceToneClasses),
    },
    shadowTone: {
      control: "select",
      options: Object.keys(shadowToneClasses),
    },
    showArrow: {
      control: "boolean",
    },
    arrowPosition: {
      control: "inline-radio",
      options: ["start", "end"],
    },
    arrowDirection: {
      control: "inline-radio",
      options: ["right", "left", "up", "down"],
    },
    arrowColor: {
      control: "select",
      options: Object.keys(arrowStrokeColors),
    },
  },
} satisfies Meta<typeof StoryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LinkWithArrow: Story = {
  args: {
    label: "See my work",
    as: "link",
    href: "#work",
    surfaceTone: "aqua",
    shadowTone: "aqua",
    showArrow: true,
    arrowPosition: "end",
    arrowDirection: "right",
    arrowColor: "azure",
  },
};

export const TangAccent: Story = {
  args: {
    label: "Get in touch",
    surfaceTone: "tang",
    shadowTone: "black",
    showArrow: true,
    arrowPosition: "start",
    arrowDirection: "right",
    arrowColor: "black",
  },
};
