import Test from "./Test";
import { render, screen } from "@testing-library/react";

describe("Test 컴포넌트 단위 테스트", () => {
  test("prop으로 전달받은 size가 적용된다.", () => {
    render(<Test size="md" />);
    const testComponent = screen.getByText("Test");
    expect(testComponent).toHaveClass("size-md");
  });
});
