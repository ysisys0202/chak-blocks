import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta = {
  title: "Atom/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Tag의 크기입니다.",
      control: "select",
      defaultValue: "md",
    },
    variant: {
      description: "Tag의 종류입니다.",
      control: "select",
      defaultValue: "contained",
    },
    theme: {
      description: "Tag의 색상입니다.",
      control: "select",
      defaultValue: "primary",
    },
    className: { table: { disable: true } },
    as: { table: { disable: true } },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "outlined",
    theme: "primary",
    children: "Tag",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    variant: "contained",
    theme: "primary",
    children: "Small Tag",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Tag {...args} variant="outlined">
        Outlined Tag
      </Tag>
      <Tag {...args}>Contained Tag</Tag>
    </div>
  ),
};

export const Medium: Story = {
  args: {
    size: "md",
    variant: "contained",
    theme: "primary",
    children: "Medium Tag",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Tag {...args} variant="outlined">
        Outlined Tag
      </Tag>
      <Tag {...args}>Contained Tag</Tag>
    </div>
  ),
};

export const Large: Story = {
  args: {
    size: "lg",
    variant: "contained",
    theme: "primary",
    children: "Large Tag",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Tag {...args} variant="outlined">
        Outlined Tag
      </Tag>
      <Tag {...args}>Contained Tag</Tag>
    </div>
  ),
};

export const Primary: Story = {
  args: {
    size: "md",
    variant: "contained",
    theme: "primary",
    children: "Large Tag",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Tag {...args} variant="outlined">
        Outlined Tag
      </Tag>
      <Tag {...args}>Contained Tag</Tag>
    </div>
  ),
};

export const Success: Story = {
  args: {
    size: "md",
    variant: "contained",
    theme: "success",
    children: "Success",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Tag {...args} variant="outlined">
        Outlined Tag
      </Tag>
      <Tag {...args}>Contained Tag</Tag>
    </div>
  ),
};

export const Warning: Story = {
  args: {
    size: "md",
    variant: "contained",
    theme: "warning",
    children: "Warning",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Tag {...args} variant="outlined">
        Outlined Tag
      </Tag>
      <Tag {...args}>Contained Tag</Tag>
    </div>
  ),
};

export const Error: Story = {
  args: {
    size: "md",
    variant: "contained",
    theme: "error",
    children: "Error",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Tag {...args} variant="outlined">
        Outlined Tag
      </Tag>
      <Tag {...args}>Contained Tag</Tag>
    </div>
  ),
};
export const Light: Story = {
  args: {
    size: "md",
    variant: "contained",
    theme: "light",
    children: "Light",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        padding: 10,
        backgroundColor: "lightgray",
      }}
    >
      <Tag {...args} variant="outlined">
        Outlined Tag
      </Tag>
      <Tag {...args}>Contained Tag</Tag>
    </div>
  ),
};

export const Dark: Story = {
  args: {
    size: "md",
    variant: "contained",
    theme: "dark",
    children: "Dark",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Tag {...args} variant="outlined">
        Outlined Tag
      </Tag>
      <Tag {...args}>Contained Tag</Tag>
    </div>
  ),
};
