import { PropsWithChildren } from "react";
import { toastContainerStyle } from "./style.css";

export const ToastContainer = ({ children }: PropsWithChildren) => {
  return <div className={toastContainerStyle}>{children}</div>;
};
