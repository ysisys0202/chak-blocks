import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta = {
  title: "Organism/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    initActiveItems: {
      description: "초기 활성된 Accordion Item들입니다.",
    },
    size: {
      description: "Accordion의 크기입니다.",
      control: "select",
      defaultValue: "md",
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <></> },
  render: () => {
    return (
      <Accordion initActiveItems={["2"]} style={{ width: "500px" }}>
        <Accordion.Item
          accordionKey="1"
          renderChildren={(accordionKey, isActive) => {
            return (
              <>
                <Accordion.Button
                  accordionKey={accordionKey}
                  isActive={isActive}
                >
                  <Accordion.Label
                    accordionKey={accordionKey}
                    isActive={isActive}
                  >
                    아코디언 제목 1
                  </Accordion.Label>
                  <Accordion.Icon
                    accordionKey={accordionKey}
                    isActive={isActive}
                  />
                </Accordion.Button>
                <Accordion.Content
                  accordionKey={accordionKey}
                  isActive={isActive}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ut tortor at massa feugiat elementum. Vestibulum erat
                  felis, laoreet non felis eu, finibus pharetra augue. Aliquam
                </Accordion.Content>
              </>
            );
          }}
        />
        <Accordion.Item
          accordionKey="2"
          renderChildren={(accordionKey, isActive) => {
            return (
              <>
                <Accordion.Button
                  accordionKey={accordionKey}
                  isActive={isActive}
                >
                  <Accordion.Label
                    accordionKey={accordionKey}
                    isActive={isActive}
                  >
                    아코디언 제목 2
                  </Accordion.Label>
                  <Accordion.Icon
                    accordionKey={accordionKey}
                    isActive={isActive}
                  />
                </Accordion.Button>
                <Accordion.Content
                  accordionKey={accordionKey}
                  isActive={isActive}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ut tortor at massa feugiat elementum. Vestibulum erat
                  felis, laoreet non felis eu, finibus pharetra augue. Aliquam
                </Accordion.Content>
              </>
            );
          }}
        />
        <Accordion.Item
          accordionKey="3"
          renderChildren={(accordionKey, isActive) => {
            return (
              <>
                <Accordion.Button
                  accordionKey={accordionKey}
                  isActive={isActive}
                >
                  <Accordion.Label
                    accordionKey={accordionKey}
                    isActive={isActive}
                  >
                    아코디언 제목 3
                  </Accordion.Label>
                  <Accordion.Icon
                    accordionKey={accordionKey}
                    isActive={isActive}
                  />
                </Accordion.Button>
                <Accordion.Content
                  accordionKey={accordionKey}
                  isActive={isActive}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ut tortor at massa feugiat elementum. Vestibulum erat
                  felis, laoreet non felis eu, finibus pharetra augue. Aliquam
                </Accordion.Content>
              </>
            );
          }}
        />
        <Accordion.Item
          accordionKey="4"
          renderChildren={(accordionKey, isActive) => {
            return (
              <>
                <Accordion.Button
                  accordionKey={accordionKey}
                  isActive={isActive}
                >
                  <Accordion.Label
                    accordionKey={accordionKey}
                    isActive={isActive}
                  >
                    아코디언 제목 4
                  </Accordion.Label>
                  <Accordion.Icon
                    accordionKey={accordionKey}
                    isActive={isActive}
                  />
                </Accordion.Button>
                <Accordion.Content
                  accordionKey={accordionKey}
                  isActive={isActive}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ut tortor at massa feugiat elementum. Vestibulum erat
                  felis, laoreet non felis eu, finibus pharetra augue. Aliquam
                </Accordion.Content>
              </>
            );
          }}
        />
      </Accordion>
    );
  },
};
