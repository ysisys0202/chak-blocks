import { render, screen } from "@testing-library/react";
import { Divider, defaultDividerProps, DividerProps } from "./Divider.tsx";
import { dividerStyles } from "./style.css.ts";

describe("Divider 컴포넌트 단위 테스트", () => {
  const themes: Exclude<DividerProps["theme"], undefined>[] = [
    "primary",
    "secondary",
    "info",
    "tertiary",
    "success",
    "error",
    "warning",
    "light",
  ];
  const directions: Exclude<DividerProps["direction"], undefined>[] = [
    "horizontal",
    "vertical",
  ];

  test("prop으로 전달된 children이 렌더링된다.", () => {
    render(<Divider data-testId="divider" />);

    const component = screen.getByTestId("divider");
    expect(component).toBeInTheDocument();
  });

  test("optional props를 전달하지 않으면 default props가 적용된다.", () => {
    const { container } = render(<Divider data-testId="divider" />);
    const component = screen.getByTestId("divider");
    expect(component).toHaveClass(
      dividerStyles({
        theme: defaultDividerProps.theme,
        direction: defaultDividerProps.direction,
      })
    );
    expect(component).toHaveStyle({
      width: " 100%",
      height: " 1px",
    });
    expect(container.querySelector(defaultDividerProps.as)).toBeInTheDocument();
  });

  test("prop으로 전달된 className이 적용된다.", () => {
    render(<Divider className="Divider-test" data-testId="divider" />);

    const component = screen.getByTestId("divider");
    expect(component).toHaveClass("Divider-test");
  });

  test.each(themes)("theme prop이 적용된다.", (theme) => {
    render(<Divider theme={theme} data-testId="divider" />);
    const component = screen.getByTestId("divider");
    expect(component).toHaveClass(dividerStyles({ theme }));
  });

  test.each(directions)("direction prop이 적용된다.", (direction) => {
    render(<Divider direction={direction} data-testId="divider" />);
    const component = screen.getByTestId("divider");
    expect(component).toHaveClass(
      dividerStyles({
        theme: defaultDividerProps.theme,
        direction,
      })
    );
  });

  test("size prop이 적용된다.", () => {
    const size = "5px";
    render(<Divider size={size} data-testId="divider" />);
    const component = screen.getByTestId("divider");
    expect(component).toHaveStyle({
      color: ` ${size}`,
    });
  });

  test("color prop이 적용된다.", () => {
    const color = "blue";
    render(<Divider color={color} data-testId="divider" />);
    const component = screen.getByTestId("divider");
    expect(component).toHaveStyle({
      color: ` ${color}`,
    });
  });

  test("theme, color prop 모두 전달될 시 color prop이 우선 적용된다.", () => {
    const color = "blue";
    render(<Divider theme="secondary" color={color} data-testId="divider" />);
    const component = screen.getByTestId("divider");
    expect(component).toHaveStyle({
      color: ` ${color}`,
    });
  });

  test("as prop이 적용된다.", () => {
    const as = "strong";
    const { container } = render(<Divider as={as} data-testId="divider" />);

    expect(container.querySelector(as)).toBeInTheDocument();
  });
});
