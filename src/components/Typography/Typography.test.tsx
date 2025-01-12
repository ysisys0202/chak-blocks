// Typography.test.tsx
import { render, screen } from "@testing-library/react";
import Typography, {
  typographyDefaultProps,
  TypographyProps,
} from "./Typography";
import { typography as typographyStyles } from "./style.css.ts";

describe("Typography 컴포넌트 단위 테스트", () => {
  const variants: Exclude<TypographyProps["variant"], undefined>[] = [
    "title1",
    "title2",
    "title3",
    "title4",
    "title5",
    "text1",
    "text2",
    "text3",
  ];
  const types: Exclude<TypographyProps["type"], undefined>[] = [
    "primary",
    "secondary",
    "tertiary",
    "success",
    "error",
    "warning",
  ];
  const hasProps = [true, false];
  test("prop으로 전달된 children이 렌더링된다.", () => {
    render(<Typography>typography</Typography>);

    const component = screen.getByText("typography");
    expect(component).toBeInTheDocument();
  });
  test("optional props를 전달하지 않으면 default props가 적용된다.", () => {
    const { container } = render(<Typography>typography</Typography>);
    const component = screen.getByText("typography");
    expect(component).toHaveClass(
      typographyStyles[typographyDefaultProps.variant]
    );
    expect(component).toHaveClass(
      typographyStyles[typographyDefaultProps.type]
    );
    expect(
      container.querySelector(typographyDefaultProps.as)
    ).toBeInTheDocument();
  });
  test("prop으로 전달된 className이 적용된다.", () => {
    render(<Typography className="typography-test">typography</Typography>);

    const component = screen.getByText("typography");
    expect(component).toHaveClass("typography-test");
  });
  test.each(variants)("variant prop이 적용된다.", (variant) => {
    render(<Typography variant={variant}>typography</Typography>);
    const component = screen.getByText("typography");
    expect(component).toHaveClass(typographyStyles[variant]);
  });

  test.each(types)("type prop이 적용된다.", (type) => {
    render(<Typography type={type}>typography</Typography>);
    const component = screen.getByText("typography");
    expect(component).toHaveClass(typographyStyles[type]);
  });

  test.each(hasProps)("mark prop이 적용된다.", (hasProp) => {
    render(<Typography mark={hasProp}>typography</Typography>);
    const component = screen.getByText("typography");
    hasProp
      ? expect(component).toHaveClass(typographyStyles.mark)
      : expect(component).not.toHaveClass(typographyStyles.mark);
  });

  test.each(hasProps)("del prop이 적용된다.", (hasProp) => {
    render(<Typography del={hasProp}>typography</Typography>);
    const component = screen.getByText("typography");
    hasProp
      ? expect(component).toHaveClass(typographyStyles.del)
      : expect(component).not.toHaveClass(typographyStyles.del);
  });

  test.each(hasProps)("strong prop이 적용된다.", (hasProp) => {
    render(<Typography strong={hasProp}>typography</Typography>);
    const component = screen.getByText("typography");
    hasProp
      ? expect(component).toHaveClass(typographyStyles.strong)
      : expect(component).not.toHaveClass(typographyStyles.strong);
  });

  test.each(hasProps)("italic prop이 적용된다.", (hasProp) => {
    render(<Typography italic={hasProp}>typography</Typography>);
    const component = screen.getByText("typography");
    hasProp
      ? expect(component).toHaveClass(typographyStyles.italic)
      : expect(component).not.toHaveClass(typographyStyles.italic);
  });
  test("color prop이 적용된다.", () => {
    const color = "blue";
    render(<Typography color={color}>typography</Typography>);
    const component = screen.getByText("typography");
    expect(component).toHaveStyle({
      color: ` ${color}`,
    });
  });
  test("type, color prop 모두 전달될 시 color prop이 우선 적용된다.", () => {
    const color = "blue";
    render(
      <Typography type="secondary" color={color}>
        typography
      </Typography>
    );
    const component = screen.getByText("typography");
    expect(component).toHaveStyle({
      color: ` ${color}`,
    });
  });
  test("as prop이 적용된다.", () => {
    const as = "strong";
    const { container } = render(<Typography as={as}>typography</Typography>);

    expect(container.querySelector(as)).toBeInTheDocument();
  });
});
