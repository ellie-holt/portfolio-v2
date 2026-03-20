import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Write your message...",
    disabled: false,
    "aria-invalid": false,
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    "aria-invalid": {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: 6,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled textarea",
    rows: 6,
  },
  argTypes: {
    disabled: {
      control: false,
    },
  },
};

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    placeholder: "Invalid textarea",
    rows: 6,
  },
  argTypes: {
    "aria-invalid": {
      control: false,
    },
  },
};
