import { render, screen } from "@testing-library/react";
import { Skeleton, defaultSkeletonProps, SkeletonProps } from "./Skeleton.tsx";
import { skeletonStyles } from "./style.css.ts";

describe("Skeleton 컴포넌트 단위 테스트", () => {
  const variants: Exclude<SkeletonProps["variant"], undefined>[] = [
    "filled",
    "outlined",
  ];

  test("optional props를 전달하지 않으면 default props가 적용된다.", () => {
    const { container } = render(<Skeleton data-testId="skeleton" />);

    const component = screen.getByTestId("skeleton");

    expect(
      container.querySelector(defaultSkeletonProps.as)
    ).toBeInTheDocument();

    expect(component).toHaveClass(
      skeletonStyles({ variant: defaultSkeletonProps.variant })
    );

    expect(component).toHaveStyle({
      width: ` ${defaultSkeletonProps.width}`,
      height: ` ${defaultSkeletonProps.height}`,
    });
  });

  test("className prop이 적용된다.", () => {
    render(<Skeleton className="skeleton-test" data-testId="skeleton" />);

    const component = screen.getByTestId("skeleton");

    expect(component).toHaveClass("skeleton-test");
  });

  test.each(variants)("variant prop이 적용된다.", (variant) => {
    render(<Skeleton variant={variant} data-testId="skeleton" />);
    const component = screen.getByTestId("skeleton");

    expect(component).toHaveClass(skeletonStyles({ variant }));
  });

  test("width prop이 적용된다.", () => {
    const width = "200px";
    render(<Skeleton width={width} data-testId="skeleton" />);
    const component = screen.getByTestId("skeleton");

    expect(component).toHaveStyle({
      width: ` ${width}`,
    });
  });

  test("height prop이 적용된다.", () => {
    const height = "200px";
    render(<Skeleton height={height} data-testId="skeleton" />);
    const component = screen.getByTestId("skeleton");

    expect(component).toHaveStyle({
      height: ` ${height}`,
    });
  });

  test("as prop이 적용된다.", () => {
    const as = "span";
    const { container } = render(<Skeleton as={as} />);

    expect(container.querySelector(as)).toBeInTheDocument();
  });
});
