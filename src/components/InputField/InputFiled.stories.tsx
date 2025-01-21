import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputField, InputFieldProps } from "./InputField";
import { Input } from "../Input";

const meta = {
  title: "Molecule/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      description: "라벨과 인풋의 정렬 방향입니다.",
      control: "inline-radio",
      option: ["horizontal", "vertical"],
    },
    isRequired: {
      description: "필수 입력 속성입니다.",
      control: "boolean",
    },
    helperText: {
      description: "도움 메세지입니다.",
    },
    errorText: {
      description: "에러 메세지입니다.",
    },
    as: { table: { disable: true } },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "아이디",
    direction: "vertical",
  },
  render: (args) => {
    return (
      <InputField {...args}>
        <Input placeholder="아이디를 입력해주세요." />
      </InputField>
    );
  },
};

export const Horizontal: Story = {
  args: {
    label: "아이디",
    direction: "horizontal",
  },
  render: (args) => {
    return (
      <InputField {...args}>
        <Input placeholder="아이디를 입력해주세요." />
      </InputField>
    );
  },
};

export const IsRequired: Story = {
  args: {
    label: "비밀번호",
    direction: "vertical",
  },
  render: (args) => {
    return (
      <InputField {...args} isRequired>
        <Input type="password" placeholder="비밀번호를 입력해주세요." />
      </InputField>
    );
  },
};

export const HelperText: Story = {
  args: {
    label: "이메일",
    direction: "vertical",
  },
  render: (args) => {
    return (
      <InputField {...args} isRequired helperText="아이디를 입력해주세요.">
        <Input type="email" placeholder="이메일을 입력해주세요." />
      </InputField>
    );
  },
};

export const ErrorText: Story = {
  args: {
    label: "아이디",
    direction: "horizontal",
  },
  render: (args) => {
    return (
      <InputField {...args} isRequired errorText="문제가 발생했습니다.">
        <Input theme="error" placeholder="아이디를 입력해주세요." />
      </InputField>
    );
  },
};
