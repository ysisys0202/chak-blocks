import { render, screen } from "@testing-library/react";
import { Accordion, AccordionProps, defaultAccordionProps } from "./Accordion";
import userEvent from "@testing-library/user-event";
import { accordionButtonStyles, accordionContentStyles } from "./styles.css";

const renderAccordion = (
  args: Pick<AccordionProps, "initActiveItems" | "style" | "size">
) => {
  return render(
    <Accordion {...args} data-testId="accordion">
      {Array.from({ length: 4 }, (_, index) => (
        <Accordion.Item
          key={index}
          accordionKey={String(index)}
          data-testId="accordion-item"
          renderChildren={(accordionKey, isActive) => {
            console.log(isActive);
            return (
              <>
                <Accordion.Button
                  accordionKey={accordionKey}
                  isActive={isActive}
                  data-testId="accordion-button"
                >
                  <Accordion.Label
                    accordionKey={accordionKey}
                    isActive={isActive}
                    data-testId="accordion-label"
                  >
                    아코디언 제목 {index}
                  </Accordion.Label>
                  <Accordion.Icon
                    accordionKey={accordionKey}
                    isActive={isActive}
                    data-testId="accordion-icon"
                  />
                </Accordion.Button>
                <Accordion.Content
                  accordionKey={accordionKey}
                  isActive={isActive}
                  data-testId="accordion-content"
                  data-active-content={isActive}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ut tortor at massa feugiat elementum. Vestibulum erat
                  felis, laoreet non felis eu, finibus pharetra augue. Aliquam
                </Accordion.Content>
              </>
            );
          }}
        />
      ))}
    </Accordion>
  );
};

describe("Accordion 컴포넌트 테스트", () => {
  const sizes = ["sm", "md", "lg"] as AccordionProps["size"][];

  test("optional props를 전달하지 않으면 default props가 적용된다.", () => {
    renderAccordion({});

    const accordion = screen.getByTestId("accordion");
    const accordionItem = screen.getAllByTestId("accordion-item")[0];
    const accordionButton = screen.getAllByTestId("accordion-button")[0];
    const accordionContent = screen.getAllByTestId("accordion-content")[0];

    expect(accordion.tagName).toBe(defaultAccordionProps.as.toUpperCase());
    expect(accordionItem.tagName).toBe("LI");
    expect(accordionButton).toHaveClass(
      accordionButtonStyles({ size: defaultAccordionProps.size })
    );
    expect(accordionContent).toHaveClass(
      accordionContentStyles({ size: defaultAccordionProps.size })
    );
  });

  test("initActiveItems prop에 accordionKey가 포함된 AccordionItem은 열린 상태로 렌더링된다.", () => {
    renderAccordion({ initActiveItems: ["1", "2"] });
    const accordionContents = screen.getAllByTestId("accordion-content");

    expect(accordionContents[0]).toHaveAttribute(
      "data-active-content",
      "false"
    );
    expect(accordionContents[1]).toHaveAttribute("data-active-content", "true");
    expect(accordionContents[2]).toHaveAttribute("data-active-content", "true");
    expect(accordionContents[3]).toHaveAttribute(
      "data-active-content",
      "false"
    );
  });

  test("닫힌 상태의 AccordionItem 버튼을 클릭하면 열린다.", async () => {
    renderAccordion({ initActiveItems: ["1", "2"] });
    const accordionButtons = screen.getAllByTestId("accordion-button");
    const accordionContents = screen.getAllByTestId("accordion-content");

    expect(accordionContents[0]).toHaveAttribute(
      "data-active-content",
      "false"
    );

    await userEvent.click(accordionButtons[0]);

    expect(accordionContents[0]).toHaveAttribute("data-active-content", "true");
  });

  test("열린 상태의 AccordionItem 버튼을 클릭하면 닫힌다.", async () => {
    renderAccordion({ initActiveItems: ["1", "2"] });
    const accordionButtons = screen.getAllByTestId("accordion-button");
    const accordionContents = screen.getAllByTestId("accordion-content");

    expect(accordionContents[1]).toHaveAttribute("data-active-content", "true");

    await userEvent.click(accordionButtons[1]);

    expect(accordionContents[1]).toHaveAttribute(
      "data-active-content",
      "false"
    );
  });

  test.each(sizes)("size prop이 적용된다.", async (size) => {
    renderAccordion({ size });

    const accordionButtons = screen.getAllByTestId("accordion-button");
    const accordionContents = screen.getAllByTestId("accordion-content");

    expect(accordionButtons[0]).toHaveClass(accordionButtonStyles({ size }));
    expect(accordionContents[0]).toHaveClass(accordionContentStyles({ size }));
  });
});
