import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";

const meta = {
  title: "Atom/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      description: "Divider의 지정 색상입니다.",
      control: "select",
    },
    color: {
      description:
        "Divider의 커스텀 색상입니다. type 속성보다 높은 우선순위를 가집니다.",
      control: "color",
    },
    size: {
      description: "Divider의 두께입니다.",
      control: "text",
    },
    as: {
      control: "select",
      options: ["hr", "div"],
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: "tertiary",
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: 800,
        }}
      >
        <Divider {...args} />
      </div>
    );
  },
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: 800,
        }}
      >
        <Divider {...args} theme="primary" size="1px" />
        <Divider {...args} theme="secondary" size="2px" />
        <Divider {...args} theme="tertiary" size="3px" />
        <Divider {...args} theme="info" size="4px" />
        <Divider {...args} theme="success" size="5px" />
        <Divider {...args} theme="warning" size="6px" />
        <Divider {...args} theme="error" size="7px" />
      </div>
    );
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          gap: 20,
          width: 800,
          height: 500,
        }}
      >
        <Divider {...args} theme="primary" size="1px" />
        <Divider {...args} theme="secondary" size="2px" />
        <Divider {...args} theme="tertiary" size="3px" />
        <Divider {...args} theme="info" size="4px" />
        <Divider {...args} theme="success" size="5px" />
        <Divider {...args} theme="warning" size="6px" />
        <Divider {...args} theme="error" size="7px" />
      </div>
    );
  },
};
