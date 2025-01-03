import type { Meta, StoryObj } from "@storybook/react";
import Test from "./index";

const meta = {
  title: "Atom/Test",
  component: Test,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Test의 크기입니다.",
      options: ["sm", "md", "lg"],
      control: "select",
      defaultValue: "md",
    },

    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Test>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm",
  },
};
