import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Atom/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Button의 크기입니다.",
      options: ["sm", "md", "lg"],
      control: "select",
      defaultValue: "md",
    },
    variant: {
      description: "Button의 종류입니다.",
      options: ["contained", "outlined", "text"],
      control: "select",
      defaultValue: "contained",
    },
    theme: {
      description: "Button의 색상입니다.",
      options: ["primary", "success", "error", "warning", "light", "dark"],
      control: "select",
      defaultValue: "primary",
    },
    className: { table: { disable: true } },
    as: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "contained",
    theme: "primary",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    variant: "contained",
    theme: "primary",
    children: "Small Button",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Button {...args}>Contained Button</Button>
      <Button {...args} variant="outlined">
        Outlined Button
      </Button>
      <Button {...args} variant="text">
        Text Button
      </Button>
    </div>
  ),
};

export const Medium: Story = {
  args: {
    size: "md",
    variant: "contained",
    theme: "primary",
    children: "Medium Button",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Button {...args}>Contained Button</Button>
      <Button {...args} variant="outlined">
        Outlined Button
      </Button>
      <Button {...args} variant="text">
        Text Button
      </Button>
    </div>
  ),
};

export const Large: Story = {
  args: {
    size: "lg",
    variant: "contained",
    theme: "primary",
    children: "Large Button",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Button {...args}>Contained Button</Button>
      <Button {...args} variant="outlined">
        Outlined Button
      </Button>
      <Button {...args} variant="text">
        Text Button
      </Button>
    </div>
  ),
};

export const Primary: Story = {
  args: {
    size: "md",
    variant: "contained",
    theme: "primary",
    children: "Large Button",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Button {...args}>Contained Button</Button>
      <Button {...args} variant="outlined">
        Outlined Button
      </Button>
      <Button {...args} variant="text">
        Text Button
      </Button>
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
      <Button {...args}>Contained Button</Button>
      <Button {...args} variant="outlined">
        Outlined Button
      </Button>
      <Button {...args} variant="text">
        Text Button
      </Button>
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
      <Button {...args}>Contained Button</Button>
      <Button {...args} variant="outlined">
        Outlined Button
      </Button>
      <Button {...args} variant="text">
        Text Button
      </Button>
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
      <Button {...args}>Contained Button</Button>
      <Button {...args} variant="outlined">
        Outlined Button
      </Button>
      <Button {...args} variant="text">
        Text Button
      </Button>
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
      <Button {...args}>Contained Button</Button>
      <Button {...args} variant="outlined">
        Outlined Button
      </Button>
      <Button {...args} variant="text">
        Text Button
      </Button>
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
      <Button {...args}>Contained Button</Button>
      <Button {...args} variant="outlined">
        Outlined Button
      </Button>
      <Button {...args} variant="text">
        Text Button
      </Button>
    </div>
  ),
};
