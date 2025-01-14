// Tag.test.tsx
import { render, screen } from "@testing-library/react";
import Tag, { defaultTagProps, TagProps } from "./Tag.tsx";
import { tagStyles } from "./style.css.ts";

describe("Tag 컴포넌트 단위 테스트", () => {
  const variants: Exclude<TagProps["variant"], undefined>[] = [
    "outlined",
    "contained",
  ];
  const sizes: Exclude<TagProps["size"], undefined>[] = ["sm", "md", "lg"];
  const themes: Exclude<TagProps["theme"], undefined>[] = [
    "primary",
    "success",
    "error",
    "warning",
    "light",
    "dark",
  ];

  test("prop으로 전달된 children이 렌더링된다.", () => {
    render(<Tag>tag</Tag>);

    const component = screen.getByText("tag");

    expect(component).toBeInTheDocument();
  });
  test("optional props를 전달하지 않으면 default props가 적용된다.", () => {
    const { container } = render(<Tag>tag</Tag>);

    const component = screen.getByText("tag");

    expect(component).toHaveClass(
      tagStyles({
        variant: defaultTagProps.variant,
        theme: defaultTagProps.theme,
        size: defaultTagProps.size,
      })
    );
    expect(container.querySelector(defaultTagProps.as)).toBeInTheDocument();
  });

  test("prop으로 전달된 className이 적용된다.", () => {
    render(<Tag className="tag-test">tag</Tag>);

    const component = screen.getByText("tag");

    expect(component).toHaveClass("tag-test");
  });

  test.each(variants)("variant prop이 적용된다.", (variant) => {
    render(<Tag variant={variant}>tag</Tag>);

    const component = screen.getByText("tag");

    expect(component).toHaveClass(
      tagStyles({
        variant,
        size: defaultTagProps.size,
        theme: defaultTagProps.theme,
      })
    );
  });

  test.each(themes)("theme prop이 적용된다.", (theme) => {
    render(<Tag theme={theme}>tag</Tag>);

    const component = screen.getByText("tag");

    expect(component).toHaveClass(
      tagStyles({
        variant: defaultTagProps.variant,
        size: defaultTagProps.size,
        theme,
      })
    );
  });

  test.each(sizes)("size prop이 적용된다.", (size) => {
    render(<Tag size={size}>tag</Tag>);

    const component = screen.getByText("tag");

    expect(component).toHaveClass(
      tagStyles({
        variant: defaultTagProps.variant,
        size,
        theme: defaultTagProps.theme,
      })
    );
  });

  test("as prop이 적용된다.", () => {
    const as = "span";
    const { container } = render(<Tag as={as}>tag</Tag>);

    expect(container.querySelector(as)).toBeInTheDocument();
  });
});
