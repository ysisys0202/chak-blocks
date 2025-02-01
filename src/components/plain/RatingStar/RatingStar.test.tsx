import { render, screen } from "@testing-library/react";
import {
  RatingStar,
  defaultRatingStarProps,
  RatingStarProps,
  sizeMap,
} from "./RatingStar.tsx";

describe("RatingStar 컴포넌트 단위 테스트", () => {
  const sizes: Exclude<RatingStarProps["size"], undefined>[] = [
    "sm",
    "md",
    "lg",
  ];

  test("optional props를 전달하지 않으면 default props가 적용된다.", () => {
    const { container } = render(
      <RatingStar value={100} data-testId="rating-star" />
    );

    expect(
      container.querySelector(defaultRatingStarProps.as)
    ).toBeInTheDocument();

    expect(container.querySelector("svg")).toHaveStyle({
      width: ` ${sizeMap.get(defaultRatingStarProps.size)}px`,
      height: ` ${sizeMap.get(defaultRatingStarProps.size)}px`,
    });
  });

  test("className prop이 적용된다.", () => {
    render(
      <RatingStar
        value={100}
        data-testId="rating-star"
        className="rating-star-test"
      />
    );

    const component = screen.getByTestId("rating-star");

    expect(component).toHaveClass("rating-star-test");
  });

  test("value prop이 적용된다.", () => {
    const value = 70;
    const { container } = render(
      <RatingStar
        value={value}
        data-testId="rating-star"
        className="rating-star-test"
      />
    );
    const activeRatingStar = container.querySelectorAll("svg")[1];
    expect(activeRatingStar?.getAttribute("clip-path")).toBe(
      `inset(0 ${100 - value}% 0 0)`
    );
  });

  test.each(sizes)("size prop이 적용된다.", (size) => {
    const { container } = render(
      <RatingStar
        value={100}
        data-testId="rating-star"
        className="rating-star-test"
      />
    );

    expect(container.querySelector("svg")).toHaveStyle({
      width: ` ${sizeMap.get(size)}px`,
      height: ` ${sizeMap.get(size)}px`,
    });
  });

  test("as prop이 적용된다.", () => {
    const as = "span";
    const { container } = render(<RatingStar value={100} as={as} />);

    expect(container.querySelector(as)).toBeInTheDocument();
  });
});
