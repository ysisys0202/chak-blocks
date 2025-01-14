import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Atom/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    inputSize: {
      description: "Input의 크기입니다.",
      options: ["sm", "md", "lg"],
      control: "select",
      defaultValue: "md",
    },
    theme: {
      description: "Input의 색상입니다.",
      options: ["primary", "success", "error", "warning", "light", "dark"],
      control: "select",
      defaultValue: "primary",
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputSize: "md",
    theme: "primary",
  },
};

export const Small: Story = {
  args: {
    inputSize: "sm",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Input {...args} placeholder="primary input" />
      <Input {...args} placeholder="active input" theme="active" />
      <Input {...args} placeholder="success input" theme="success" />
      <Input {...args} placeholder="warning input" theme="warning" />
      <Input {...args} placeholder="error input" theme="error" />
    </div>
  ),
};

export const Medium: Story = {
  args: {
    inputSize: "md",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Input {...args} placeholder="primary input" />
      <Input {...args} placeholder="active input" theme="active" />
      <Input {...args} placeholder="success input" theme="success" />
      <Input {...args} placeholder="warning input" theme="warning" />
      <Input {...args} placeholder="error input" theme="error" />
    </div>
  ),
};

export const Large: Story = {
  args: {
    inputSize: "lg",
    theme: "primary",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Input {...args} placeholder="primary input" />
      <Input {...args} placeholder="active input" theme="active" />
      <Input {...args} placeholder="success input" theme="success" />
      <Input {...args} placeholder="warning input" theme="warning" />
      <Input {...args} placeholder="error input" theme="error" />
    </div>
  ),
};
