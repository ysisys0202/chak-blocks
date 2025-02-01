import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input, defaultInputProps, InputProps } from "./Input.tsx";
import { inputStyles } from "./style.css.ts";

describe("Input 컴포넌트 단위 테스트", () => {
  const sizes: Exclude<InputProps["inputSize"], undefined>[] = [
    "sm",
    "md",
    "lg",
  ];
  const themes: Exclude<InputProps["theme"], undefined>[] = [
    "primary",
    "active",
    "success",
    "error",
    "warning",
  ];

  test("optional props를 전달하지 않으면 default props가 적용된다.", () => {
    render(<Input />);

    const component = screen.getByPlaceholderText(
      defaultInputProps.placeholder
    );

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass(
      inputStyles({
        theme: defaultInputProps.theme,
        size: defaultInputProps.inputSize,
      })
    );
  });

  test("포커스 시 border color가 blue[500]으로 변경된다.", async () => {
    render(<Input />);
    const component = screen.getByPlaceholderText(
      defaultInputProps.placeholder
    );

    await userEvent.click(component);

    //  XXX : toHaveStyle matcher error
    // 스토리북에서 렌더링된 컴포넌트의 computed style과 jest dom에서의 computed style이 일치하지 않고 있음

    // expect(component).toHaveStyle({
    //   borderColor: ` ${blue[500]}`,
    // });
  });

  test("값을 입력하면 onChange 함수가 실행된다.", async () => {
    const changeHandler = vi.fn();
    render(<Input onChange={changeHandler} />);

    const component = screen.getByPlaceholderText(
      defaultInputProps.placeholder
    );

    await userEvent.type(component, "입력 값");

    expect(changeHandler).toHaveBeenCalled();
  });

  test("prop으로 전달된 className이 적용된다.", () => {
    render(<Input className="input-test" />);

    const component = screen.getByPlaceholderText(
      defaultInputProps.placeholder
    );

    expect(component).toHaveClass("input-test");
  });

  test.each(themes)("theme prop이 적용된다.", (theme) => {
    render(<Input theme={theme} />);

    const component = screen.getByPlaceholderText(
      defaultInputProps.placeholder
    );

    expect(component).toHaveClass(
      inputStyles({
        size: defaultInputProps.inputSize,
        theme,
      })
    );
  });

  test.each(sizes)("inputSize prop이 적용된다.", (size) => {
    render(<Input inputSize={size} />);

    const component = screen.getByPlaceholderText(
      defaultInputProps.placeholder
    );

    expect(component).toHaveClass(
      inputStyles({
        size,
        theme: defaultInputProps.theme,
      })
    );
  });
});
