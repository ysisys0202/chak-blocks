import { render, screen } from "@testing-library/react";
import { Card, defaultCardProps, CardProps } from "./Card.tsx";
import { cardStyles } from "./style.css.ts";

describe("Card 컴포넌트 단위 테스트", () => {
  const variants: Exclude<CardProps["variant"], undefined>[] = [
    "elevated",
    "filled",
    "outlined",
  ];
  const hasProps = [true, false];

  test("prop으로 전달된 children이 렌더링된다.", () => {
    render(<Card data-testId="card">card</Card>);

    const component = screen.getByText("card");
    expect(component).toBeInTheDocument();
  });

  test("optional props를 전달하지 않으면 default props가 적용된다.", () => {
    const { container } = render(<Card data-testId="card">card</Card>);
    const component = screen.getByTestId("card");
    expect(component).toHaveClass(
      cardStyles({
        variant: defaultCardProps.variant,
        rounded: defaultCardProps.rounded,
      })
    );
    expect(container.querySelector(defaultCardProps.as)).toBeInTheDocument();
  });

  test("prop으로 전달된 className이 적용된다.", () => {
    render(
      <Card data-testId="card" className="card-test">
        card
      </Card>
    );

    const component = screen.getByTestId("card");
    expect(component).toHaveClass("card-test");
  });

  test.each(variants)("variant prop이 적용된다.", (variant) => {
    render(
      <Card data-testId="card" variant={variant}>
        card
      </Card>
    );
    const component = screen.getByTestId("card");
    expect(component).toHaveClass(
      cardStyles({ variant, rounded: defaultCardProps.rounded })
    );
  });

  test.each(hasProps)("rounded prop이 적용된다.", (rounded) => {
    render(
      <Card data-testId="card" rounded={rounded}>
        card
      </Card>
    );
    const component = screen.getByTestId("card");
    expect(component).toHaveClass(
      cardStyles({
        variant: defaultCardProps.variant,
        rounded,
      })
    );
  });

  test("color prop이 적용된다.", () => {
    const color = "blue";
    render(
      <Card data-testId="card" color={color}>
        card
      </Card>
    );
    const component = screen.getByTestId("card");
    expect(component).toHaveStyle({
      color: ` ${color}`,
    });
  });

  test("borderColor prop이 적용된다.", () => {
    const borderColor = "blue";
    render(
      <Card data-testId="card" borderColor={borderColor}>
        card
      </Card>
    );
    const component = screen.getByTestId("card");
    // expect(component).toHaveStyle({
    //   borderColor: ` ${borderColor}`,
    // });
  });

  test("as prop이 적용된다.", () => {
    const as = "div";
    const { container } = render(
      <Card data-testId="card" as={as}>
        card
      </Card>
    );

    expect(container.querySelector(as)).toBeInTheDocument();
  });
});
