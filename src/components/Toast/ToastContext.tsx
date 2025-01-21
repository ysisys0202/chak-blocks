import { createContext, useContext } from "react";
import { ToastProps } from "./Toast";

export type ToastOptions = Pick<
  ToastProps,
  "status" | "title" | "description"
> & { duration?: number };

export type ToastContextValues = {
  open: ({ title, description, status, duration }: ToastOptions) => void;
  close: () => void;
};

export const ToastContext = createContext<ToastContextValues>({
  open: () => {},
  close: () => {},
});

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("Toast 컴포넌트 안에서 사용 가능합니다.");
  }

  return context;
};
