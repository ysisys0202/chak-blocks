import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { pink } from "../../constants/colors";
const meta = {
  title: "Atom/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Card의 종류입니다.",
      control: "select",
    },
    color: {
      description: "Card의 커스텀 색상입니다.",
      control: "color",
    },
    borderColor: {
      description: "Outliend Card의 외곽선입니다.",
      control: "color",
    },
    rounded: {
      description: "카드의 모서리를 둥글게 만드는 속성입니다.",
      control: "inline-radio",
      options: [true, false],
      defaultValue: false,
    },
    as: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "elevated",
    rounded: false,
    children: "",
  },
  render: (args) => {
    return (
      <Card {...args} style={{ maxWidth: 300 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        ultricies enim, ac feugiat tortor. Duis nunc massa, placerat eget mi
        quis, sodales posuere ligula. Proin porttitor eros sed ligula
        ullamcorper cursus. Sed tempor eros sit amet urna vulputate porttitor.
        Pellentesque ornare
      </Card>
    );
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: "",
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          gap: 14,
        }}
      >
        <Card {...args} rounded={false} style={{ maxWidth: 300 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          ultricies enim, ac feugiat tortor. Duis nunc massa, placerat eget mi
          quis, sodales posuere ligula. Proin porttitor eros sed ligula
          ullamcorper cursus. Sed tempor eros sit amet urna vulputate porttitor.
          Pellentesque ornare
        </Card>
        <Card {...args} rounded style={{ maxWidth: 300 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          ultricies enim, ac feugiat tortor. Duis nunc massa, placerat eget mi
          quis, sodales posuere ligula. Proin porttitor eros sed ligula
          ullamcorper cursus. Sed tempor eros sit amet urna vulputate porttitor.
          Pellentesque ornare
        </Card>
      </div>
    );
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "",
    color: pink[100],
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          gap: 14,
        }}
      >
        <Card {...args} rounded={false} style={{ maxWidth: 300 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          ultricies enim, ac feugiat tortor. Duis nunc massa, placerat eget mi
          quis, sodales posuere ligula. Proin porttitor eros sed ligula
          ullamcorper cursus. Sed tempor eros sit amet urna vulputate porttitor.
          Pellentesque ornare
        </Card>
        <Card {...args} rounded style={{ maxWidth: 300 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          ultricies enim, ac feugiat tortor. Duis nunc massa, placerat eget mi
          quis, sodales posuere ligula. Proin porttitor eros sed ligula
          ullamcorper cursus. Sed tempor eros sit amet urna vulputate porttitor.
          Pellentesque ornare
        </Card>
      </div>
    );
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "",
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          gap: 14,
        }}
      >
        <Card {...args} rounded={false} style={{ maxWidth: 300 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          ultricies enim, ac feugiat tortor. Duis nunc massa, placerat eget mi
          quis, sodales posuere ligula. Proin porttitor eros sed ligula
          ullamcorper cursus. Sed tempor eros sit amet urna vulputate porttitor.
          Pellentesque ornare
        </Card>
        <Card {...args} rounded style={{ maxWidth: 300 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          ultricies enim, ac feugiat tortor. Duis nunc massa, placerat eget mi
          quis, sodales posuere ligula. Proin porttitor eros sed ligula
          ullamcorper cursus. Sed tempor eros sit amet urna vulputate porttitor.
          Pellentesque ornare
        </Card>
      </div>
    );
  },
};
