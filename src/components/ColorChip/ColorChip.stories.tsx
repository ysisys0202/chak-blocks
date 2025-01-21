import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ColorChip, ColorChipProps } from "./ColorChip";
import { Typography } from "../Typography";

const meta = {
  title: "Atom/ColorChip",
  component: ColorChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "ColorChip의 크기입니다.",
      options: ["sm", "md", "lg"],
      control: "select",
      defaultValue: "md",
    },
    theme: {
      description: "ColorChip의 지정 색상입니다.",
      options: ["primary", "success", "error", "warning", "light", "dark"],
      control: "select",
      defaultValue: "primary",
    },
    color: {
      description:
        "ColorChip의 커스텀 색상입니다. theme 속성보다 높은 우선 순위를 가집니다.",
      control: "color",
    },
    className: { table: { disable: true } },
    as: { table: { disable: true } },
  },
} satisfies Meta<typeof ColorChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    theme: "primary",
  },
};

export const Primary: Story = {
  args: {
    theme: "primary",
  },
  render: (args) => {
    const sizes: ColorChipProps["size"][] = ["sm", "md", "lg"];
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {sizes.map((size) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ColorChip {...args} size={size} />
            <Typography variant="text2" theme="tertiary">
              {size}
            </Typography>
          </div>
        ))}
      </div>
    );
  },
};

export const Success: Story = {
  args: {
    theme: "success",
  },
  render: (args) => {
    const sizes: ColorChipProps["size"][] = ["sm", "md", "lg"];
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {sizes.map((size) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ColorChip {...args} size={size} />
            <Typography variant="text2" theme="tertiary">
              {size}
            </Typography>
          </div>
        ))}
      </div>
    );
  },
};

export const Warning: Story = {
  args: {
    theme: "warning",
  },
  render: (args) => {
    const sizes: ColorChipProps["size"][] = ["sm", "md", "lg"];
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {sizes.map((size) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ColorChip {...args} size={size} />
            <Typography variant="text2" theme="tertiary">
              {size}
            </Typography>
          </div>
        ))}
      </div>
    );
  },
};

export const Error: Story = {
  args: {
    theme: "error",
  },
  render: (args) => {
    const sizes: ColorChipProps["size"][] = ["sm", "md", "lg"];
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {sizes.map((size) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ColorChip {...args} size={size} />
            <Typography variant="text2" theme="tertiary">
              {size}
            </Typography>
          </div>
        ))}
      </div>
    );
  },
};

export const Light: Story = {
  args: {
    theme: "light",
  },
  render: (args) => {
    const sizes: ColorChipProps["size"][] = ["sm", "md", "lg"];
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {sizes.map((size) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ColorChip {...args} size={size} />
            <Typography variant="text2" theme="tertiary">
              {size}
            </Typography>
          </div>
        ))}
      </div>
    );
  },
};

export const Dark: Story = {
  args: {
    theme: "dark",
  },
  render: (args) => {
    const sizes: ColorChipProps["size"][] = ["sm", "md", "lg"];
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {sizes.map((size) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ColorChip {...args} size={size} />
            <Typography variant="text2" theme="tertiary">
              {size}
            </Typography>
          </div>
        ))}
      </div>
    );
  },
};
