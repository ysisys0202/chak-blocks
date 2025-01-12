import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta = {
  title: "Atom/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Typography의 종류입니다.",
      control: "select",
    },
    theme: {
      description: "Typography의 지정 색상입니다.",
      control: "select",
    },
    color: {
      description:
        "Typography의 커스텀 색상입니다. type 속성보다 높은 우선순위를 가집니다.",
      control: "color",
    },
    mark: {
      description: "Typography 마크 스타일입니다.",
      control: "inline-radio",
      options: [true, false],
      defaultValue: false,
    },
    italic: {
      description: "Typography 마크 스타일입니다.",
      control: "inline-radio",
      options: [true, false],
    },
    strong: {
      description: "Typography 강조 스타일입니다.",
      control: "inline-radio",
      options: [true, false],
    },
    del: {
      description: "Typography 삭제 스타일입니다.",
      control: "inline-radio",
      options: [true, false],
    },
    as: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "span",
        "del",
        "strong",
      ],
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "text1",
    theme: "primary",
    children: "Typography",
  },
};

export const Title: Story = {
  args: {
    color: "primary",
    children: "Title 1",
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <Typography {...args} variant="title1" as="h1">
          Title 1
        </Typography>
        <Typography {...args} variant="title2" as="h2">
          Title 2
        </Typography>
        <Typography {...args} variant="title3" as="h3">
          Title 3
        </Typography>
        <Typography {...args} variant="title4" as="h4">
          Title 4
        </Typography>
        <Typography {...args} variant="title5" as="h5">
          Title 5
        </Typography>
      </div>
    );
  },
};

export const Text: Story = {
  args: {
    variant: "text1",
    color: "primary",
    as: "p",
    children: "Text 1",
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <Typography {...args} variant="text1">
          Text 1
        </Typography>
        <Typography {...args} variant="text2">
          Text 2
        </Typography>
        <Typography {...args} variant="text3">
          Text 3
        </Typography>
      </div>
    );
  },
};

export const Mark: Story = {
  args: {
    variant: "text1",
    mark: true,
    children: "Mark Text",
  },
};
export const Italic: Story = {
  args: {
    variant: "text1",
    italic: true,
    children: "Italic Text",
  },
};
export const Delete: Story = {
  args: {
    variant: "text1",
    del: true,
    children: "Delete Text",
  },
};
export const Strong: Story = {
  args: {
    variant: "text1",
    strong: true,
    children: "Strong Text",
  },
};
