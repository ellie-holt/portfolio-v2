import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input from "./Input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    type: "text",
    placeholder: "Enter text...",
    disabled: false,
    "aria-invalid": false,
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "tel", "url"],
    },
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
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
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
    placeholder: "Invalid input",
  },
  argTypes: {
    "aria-invalid": {
      control: false,
    },
  },
};
