import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { gray } from "../../constants/colors";
import { Icon, IconProps } from "./Icon";
import { Typography } from "../Typography/Typography";

const meta = {
  title: "Atom/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "Icon의 종류입니다.",
      control: "select",
    },
    size: {
      description: "Icon의 크기입니다.",
      control: "number",
      defaultValue: 24,
    },
    color: {
      description: "Icon의 색상입니다.",
      control: "color",
      defaultValue: gray[800],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
    name: "arrow",
  },
  render: () => {
    const icons: IconProps["name"][] = [
      "arrow",
      "book",
      "chevron",
      "infomation",
      "warning",
      "star-filled",
    ];

    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {icons.map((icon) => (
          <div
            key={icon}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "8px",
              alignItems: "center",
              marginBottom: "20px",
              border: "1xp solid gray",
            }}
          >
            <Icon name={icon} />
            <Typography theme="tertiary">{icon}</Typography>
          </div>
        ))}
      </div>
    );
  },
};
