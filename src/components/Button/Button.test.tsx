// Button.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button, { defaultButtonProps, ButtonProps } from "./Button.tsx";
import { buttonStyles } from "./style.css.ts";

describe("Button 컴포넌트 단위 테스트", () => {
  const variants: Exclude<ButtonProps["variant"], undefined>[] = [
    "outlined",
    "contained",
    "text",
  ];
  const sizes: Exclude<ButtonProps["size"], undefined>[] = ["sm", "md", "lg"];
  const themes: Exclude<ButtonProps["theme"], undefined>[] = [
    "primary",
    "success",
    "error",
    "warning",
    "light",
    "dark",
  ];

  test("prop으로 전달된 children이 렌더링된다.", () => {
    render(<Button>button</Button>);

    const component = screen.getByText("button");

    expect(component).toBeInTheDocument();
  });
  test("optional props를 전달하지 않으면 default props가 적용된다.", () => {
    const { container } = render(<Button>button</Button>);

    const component = screen.getByText("button");

    expect(component).toHaveClass(
      buttonStyles({
        variant: defaultButtonProps.variant,
        theme: defaultButtonProps.theme,
        size: defaultButtonProps.size,
      })
    );
    expect(container.querySelector(defaultButtonProps.as)).toBeInTheDocument();
  });

  test("클릭 시 onClick prop으로 전달된 함수가 실행된다.", async () => {
    const clickHandler = vi.fn();
    render(<Button onClick={clickHandler}>button</Button>);

    const component = screen.getByRole("button", { name: "button" });
    await userEvent.click(component);

    expect(clickHandler).toHaveBeenCalled();
  });
  test("prop으로 전달된 className이 적용된다.", () => {
    render(<Button className="button-test">button</Button>);

    const component = screen.getByText("button");

    expect(component).toHaveClass("button-test");
  });

  test.each(variants)("variant prop이 적용된다.", (variant) => {
    render(<Button variant={variant}>Button</Button>);

    const component = screen.getByText("Button");

    expect(component).toHaveClass(
      buttonStyles({
        variant,
        size: defaultButtonProps.size,
        theme: defaultButtonProps.theme,
      })
    );
  });

  test.each(themes)("theme prop이 적용된다.", (theme) => {
    render(<Button theme={theme}>Button</Button>);

    const component = screen.getByText("Button");

    expect(component).toHaveClass(
      buttonStyles({
        variant: defaultButtonProps.variant,
        size: defaultButtonProps.size,
        theme,
      })
    );
  });

  test.each(sizes)("size prop이 적용된다.", (size) => {
    render(<Button size={size}>button</Button>);

    const component = screen.getByText("button");

    expect(component).toHaveClass(
      buttonStyles({
        variant: defaultButtonProps.variant,
        size,
        theme: defaultButtonProps.theme,
      })
    );
  });

  test("as prop이 적용된다.", () => {
    const as = "div";
    const { container } = render(<Button as={as}>button</Button>);

    expect(container.querySelector(as)).toBeInTheDocument();
  });
});
