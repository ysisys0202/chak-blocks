import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProps } from "./Toast";
import { ToastProvider } from "./ToastProvider";
import { useToast } from "./ToastContext";
import { Button, ButtonProps } from "../../plain/Button";
const meta = {
  title: "Molecule/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      description: "Toast의 상태 값입니다.",
      control: "select",
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;
const buttonMap = new Map([
  ["info", "primary"],
  ["success", "success"],
  ["warning", "warning"],
  ["error", "error"],
]);
const ToastContainer = ({
  title,
  description,
  status,
}: Pick<ToastProps, "title" | "status" | "description">) => {
  const { open } = useToast();
  const handleButtonClick = () => {
    open({ status, title, description });
  };
  return (
    <Button
      theme={buttonMap.get(status || "primary") as ButtonProps["theme"]}
      onClick={handleButtonClick}
    >
      Toast Open!
    </Button>
  );
};

export const Default: Story = {
  args: {
    status: "info",
    title: "정보입니다.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet lorem ornare, cursus nisl non, blandit tellus. Nulla et est faucibus, vulputate neque at, lacinia sapien",
  },
  render: (args) => {
    return (
      <ToastProvider>
        <ToastContainer {...args} />
      </ToastProvider>
    );
  },
};

export const Info: Story = {
  args: {
    status: "info",
    title: "정보입니다.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet lorem ornare, cursus nisl non, blandit tellus. Nulla et est faucibus, vulputate neque at, lacinia sapien",
  },
  render: (args) => {
    return (
      <ToastProvider>
        <ToastContainer {...args} />
      </ToastProvider>
    );
  },
};

export const Sucess: Story = {
  args: {
    status: "success",
    title: "성공입니다.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet lorem ornare, cursus nisl non, blandit tellus. Nulla et est faucibus, vulputate neque at, lacinia sapien",
  },
  render: (args) => {
    return (
      <ToastProvider>
        <ToastContainer {...args} />
      </ToastProvider>
    );
  },
};
export const Warning: Story = {
  args: {
    status: "warning",
    title: "경고입니다.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet lorem ornare, cursus nisl non, blandit tellus. Nulla et est faucibus, vulputate neque at, lacinia sapien",
  },
  render: (args) => {
    return (
      <ToastProvider>
        <ToastContainer {...args} />
      </ToastProvider>
    );
  },
};
export const Error: Story = {
  args: {
    status: "error",
    title: "오류입니다.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet lorem ornare, cursus nisl non, blandit tellus. Nulla et est faucibus, vulputate neque at, lacinia sapien",
  },
  render: (args) => {
    return (
      <ToastProvider>
        <ToastContainer {...args} />
      </ToastProvider>
    );
  },
};
