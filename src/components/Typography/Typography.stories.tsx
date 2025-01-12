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
    type: {
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
    type: "primary",
    children: "Typography",
  },
};

export const Title1: Story = {
  args: {
    variant: "title1",
    color: "primary",
    children: "Title 1",
  },
};

export const Title2: Story = {
  args: {
    variant: "title2",
    color: "primary",
    children: "Title 2",
  },
};

export const Title3: Story = {
  args: {
    variant: "title3",
    color: "primary",
    children: "Title 3",
  },
};

export const Title4: Story = {
  args: {
    variant: "title4",
    color: "primary",
    children: "Title 4",
  },
};

export const Title5: Story = {
  args: {
    variant: "title5",
    color: "primary",
    children: "Title 5",
  },
};

export const Text1: Story = {
  args: {
    variant: "text1",
    color: "primary",
    children: "Text 1",
  },
};

export const Text2: Story = {
  args: {
    variant: "text2",
    color: "primary",
    children: "Text 2",
  },
};

export const Text3: Story = {
  args: {
    variant: "text3",
    color: "primary",
    children: "Text 3",
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
