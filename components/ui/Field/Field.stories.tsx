import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "./Field";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";

type StoryArgs = {
  label: string;
  description: string;
  error: string;
  orientation: "vertical" | "horizontal" | "responsive";
  invalid: boolean;
};

function FieldStory({
  label,
  description,
  error,
  orientation,
  invalid,
}: StoryArgs) {
  return (
    <div className="w-90">
      <Field orientation={orientation} data-invalid={invalid || undefined}>
        <FieldLabel htmlFor="story-email">{label}</FieldLabel>
        <FieldContent>
          <Input id="story-email" type="email" placeholder="you@example.com" />
          <FieldDescription>{description}</FieldDescription>
          {invalid ? <FieldError>{error}</FieldError> : null}
        </FieldContent>
      </Field>
    </div>
  );
}

const meta = {
  title: "UI/Field",
  component: FieldStory,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    label: "Email",
    description: "We only use this to reply to you.",
    error: "Please enter a valid email address.",
    orientation: "vertical",
    invalid: false,
  },
  argTypes: {
    label: {
      control: "text",
    },
    description: {
      control: "text",
    },
    error: {
      control: "text",
    },
    orientation: {
      control: "inline-radio",
      options: ["vertical", "horizontal", "responsive"],
    },
    invalid: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof FieldStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
  argTypes: {
    invalid: {
      control: false,
    },
  },
};

export const GroupedFields: Story = {
  render: () => (
    <div className="w-105">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="story-name">Name</FieldLabel>
          <FieldContent>
            <Input id="story-name" placeholder="Your name" />
          </FieldContent>
        </Field>

        <FieldSeparator>Optional</FieldSeparator>

        <Field>
          <FieldLabel htmlFor="story-message">Message</FieldLabel>
          <FieldContent>
            <Textarea
              id="story-message"
              placeholder="Tell me about your project"
            />
            <FieldDescription>
              Keep it short and include timeline + goals.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
};

export const Fieldset: Story = {
  render: () => (
    <div className="w-105">
      <FieldSet>
        <FieldLegend>Contact preference</FieldLegend>

        <Field orientation="horizontal">
          <FieldLabel htmlFor="pref-email">Email</FieldLabel>
          <Input id="pref-email" name="contact-preference" type="radio" />
        </Field>

        <Field orientation="horizontal">
          <FieldLabel htmlFor="pref-phone">Phone</FieldLabel>
          <Input id="pref-phone" name="contact-preference" type="radio" />
        </Field>

        <FieldTitle>Follow-up</FieldTitle>
        <FieldDescription>
          We’ll reach out using your selected method.
        </FieldDescription>
      </FieldSet>
    </div>
  ),
};
