import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/Button";
import { defaultDuration, ToastProvider } from "./ToastProvider";
import { ToastOptions, useToast } from "./ToastContext";
import { toastStyles } from "./style.css";
import { defaultToastProps } from "./Toast";

describe("Toast 컴포넌트 단위 테스트", () => {
  beforeAll(() => {
    vi.stubGlobal("jest", {
      advanceTimersByTime: vi.advanceTimersByTime.bind(vi),
    });
  });
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });
  afterAll(() => {
    vi.unstubAllGlobals();
  });

  const ToastContainer = (options: ToastOptions) => {
    const { open } = useToast();
    const handleButtonClick = () => {
      open(options);
    };
    return (
      <div>
        <Button onClick={handleButtonClick}>toast button</Button>
      </div>
    );
  };

  const statuses = [
    "info",
    "success",
    "warning",
    "error",
  ] as ToastOptions["status"][];

  test("toast button 클릭 시 Toast 컴포넌트가 렌더링된다.", async () => {
    render(
      <ToastProvider>
        <ToastContainer title="toast title" />
      </ToastProvider>
    );

    const button = screen.getByText("toast button");
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime.bind(vi),
    });

    await user.click(button);

    const component = screen.getByTestId("toast");
    expect(component).toBeInTheDocument();
  });

  test("optional 값을 전달하지 않으면 defaultProp가 적용된다.", async () => {
    render(
      <ToastProvider>
        <ToastContainer title="toast title" />
      </ToastProvider>
    );

    const button = screen.getByText("toast button");
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime.bind(vi),
    });

    await user.click(button);

    const component = screen.getByTestId("toast");
    expect(component).toHaveClass(
      toastStyles({ status: defaultToastProps.status })
    );
  });

  test("open 함수에 전달된 title 문자열이 렌더링된다.", async () => {
    render(
      <ToastProvider>
        <ToastContainer title="toast title" />
      </ToastProvider>
    );

    const button = screen.getByText("toast button");
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime.bind(vi),
    });

    await user.click(button);

    const component = screen.getByText("toast title");
    expect(component).toBeInTheDocument();
  });

  test("open 함수에 전달된 description 문자열이 렌더링된다.", async () => {
    render(
      <ToastProvider>
        <ToastContainer title="toast title" description="toast description" />
      </ToastProvider>
    );

    const button = screen.getByText("toast button");
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime.bind(vi),
    });

    await user.click(button);

    const component = screen.getByText("toast description");
    expect(component).toBeInTheDocument();
  });

  test.each(statuses)(
    "open 함수에 전달된 status 값이 적용된다.",
    async (status) => {
      render(
        <ToastProvider>
          <ToastContainer title="toast title" status={status} />
        </ToastProvider>
      );

      const button = screen.getByText("toast button");
      const user = userEvent.setup({
        advanceTimers: vi.advanceTimersByTime.bind(vi),
      });

      await user.click(button);

      const component = screen.getByTestId("toast");
      expect(component).toHaveClass(toastStyles({ status }));
    }
  );

  // XXX : timeout 테스트 부정확
  // 관련 이슈 : https://github.com/testing-library/user-event/issues/1115

  test("open 함수에 duration을 전달하지 않으면 3000ms 동안 컴포넌트가 유지된다.", async () => {
    render(
      <ToastProvider>
        <ToastContainer title="toast title" />
      </ToastProvider>
    );

    const button = screen.getByText("toast button");
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime.bind(vi),
    });

    await user.click(button);

    const component = screen.getByTestId("toast");
    expect(component).toBeInTheDocument();

    vi.advanceTimersByTime(defaultDuration);
    await waitFor(() => {
      expect(component).toBeInTheDocument();
    });
  });

  test("open 함수에 전달된 duration 동안 Toast 컴포넌트가 유지된다.", async () => {
    render(
      <ToastProvider>
        <ToastContainer title="toast title" duration={200} />
      </ToastProvider>
    );

    const button = screen.getByText("toast button");
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime.bind(vi),
    });

    await user.click(button);

    const component = screen.getByTestId("toast");
    expect(component).toBeInTheDocument();

    vi.advanceTimersByTime(200);
    vi.waitFor(() => {
      expect(component).toBeInTheDocument();
    });
  });

  test("close button을 클릭하면 Toast 컴포넌트가 사라진다.", async () => {
    render(
      <ToastProvider>
        <ToastContainer title="toast title" duration={100} />
      </ToastProvider>
    );

    const button = screen.getByText("toast button");
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime.bind(vi),
    });

    await user.click(button);

    const toast = screen.getByTestId("toast");
    const closeButton = screen.getByTestId("toast-close-button");

    expect(toast).toBeInTheDocument();

    await user.click(closeButton);

    expect(toast).not.toBeInTheDocument();
  });
});
