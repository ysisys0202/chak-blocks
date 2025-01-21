import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RatingStar } from "./RatingStar";

const meta = {
  title: "Atom/RatingStar",
  component: RatingStar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "RatingStar의 크기입니다.",
      control: "select",
      defaultValue: "md",
    },
    value: {
      description:
        "RatingStar의 점수 값입니다. 범위는 0과 100을 포함한 사이값입니다.",
      control: "number",
    },
    className: { table: { disable: true } },
    as: { table: { disable: true } },
  },
} satisfies Meta<typeof RatingStar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    value: 100,
  },
  render: (args) => {
    return <RatingStar value={50} data-testId="star" className="star" />;
  },
};
