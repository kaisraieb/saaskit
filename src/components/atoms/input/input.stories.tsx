import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import Input from "./input";
import type InputProps from "./input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof InputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // variant: "secondary",
    color: "primary",
    inputSize: "medium",
    placeholder: "Enter text here",
  },
};

export const Error: Story = {
  args: {
    // variant: "secondary",
    color: "error",
    inputSize: "medium",
    placeholder: "Something went wrong",
  },
};
