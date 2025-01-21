import { render, screen } from "@testing-library/react";
import {
  ColorChip,
  defaultColorChipProps,
  ColorChipProps,
} from "./ColorChip.tsx";
import { colorChipStyles } from "./style.css.ts";

describe("ColorChip 컴포넌트 단위 테스트", () => {
  const themes: Exclude<ColorChipProps["theme"], undefined>[] = [
    "primary",
    "success",
    "error",
    "warning",
    "light",
    "dark",
  ];
  const sizes: Exclude<ColorChipProps["size"], undefined>[] = [
    "sm",
    "md",
    "lg",
  ];

  test("optional props를 전달하지 않으면 default props가 적용된다.", () => {
    const { container } = render(<ColorChip data-testId="color-chip" />);
    const component = screen.getByTestId("color-chip");
    expect(component).toHaveClass(
      colorChipStyles({
        theme: defaultColorChipProps.theme,
        size: defaultColorChipProps.size,
      })
    );
    expect(
      container.querySelector(defaultColorChipProps.as)
    ).toBeInTheDocument();
  });

  test("prop으로 전달된 className이 적용된다.", () => {
    render(<ColorChip className="color-chip-test" data-testId="color-chip" />);

    const component = screen.getByTestId("color-chip");
    expect(component).toHaveClass("color-chip-test");
  });

  test.each(themes)("theme prop이 적용된다.", (theme) => {
    render(<ColorChip theme={theme} data-testId="color-chip" />);
    const component = screen.getByTestId("color-chip");
    expect(component).toHaveClass(colorChipStyles({ theme }));
  });

  test.each(sizes)("size prop이 적용된다.", (size) => {
    render(<ColorChip size={size} data-testId="color-chip" />);
    const component = screen.getByTestId("color-chip");
    expect(component).toHaveClass(
      colorChipStyles({
        theme: defaultColorChipProps.theme,
        size,
      })
    );
  });

  test("color prop이 적용된다.", () => {
    const color = "blue";
    render(<ColorChip color={color} data-testId="color-chip" />);
    const component = screen.getByTestId("color-chip");
    expect(component).toHaveStyle({
      color: ` ${color}`,
    });
  });

  test("theme, color prop 모두 전달될 시 color prop이 우선 적용된다.", () => {
    const color = "blue";
    render(
      <ColorChip theme="success" color={color} data-testId="color-chip" />
    );
    const component = screen.getByTestId("color-chip");
    expect(component).toHaveStyle({
      color: ` ${color}`,
    });
  });

  test("as prop이 적용된다.", () => {
    const as = "span";
    const { container } = render(
      <ColorChip as={as} data-testId="color-chip" />
    );

    expect(container.querySelector(as)).toBeInTheDocument();
  });
});
