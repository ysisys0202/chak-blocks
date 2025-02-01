import { ToastContext, ToastOptions } from "./ToastContext";
import { createPortal } from "react-dom";
import { Toast } from "./Toast";
import { PropsWithChildren, useRef, useState } from "react";

import { ToastContainer } from "./ToastContainer";

export const defaultDuration = 2000;

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toastOptions, setToastOptions] = useState<ToastOptions | null>(null);
  const timerRef = useRef<number | NodeJS.Timeout | undefined>(undefined);

  const resetState = () => {
    setToastOptions(null);
    setIsOpen(false);
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
  };

  const open = (options: ToastOptions) => {
    if (toastOptions) {
      setToastOptions(null);
      clearTimeout(timerRef.current);

      timerRef.current = undefined;
    }

    setIsOpen(true);
    setToastOptions(options);

    timerRef.current = setTimeout(() => {
      resetState();
    }, options.duration || defaultDuration);
  };

  const close = () => {
    resetState();
  };

  return (
    <ToastContext.Provider
      value={{
        open,
        close,
      }}
    >
      {children}
      {isOpen &&
        toastOptions &&
        createPortal(
          <ToastContainer>
            <Toast
              {...toastOptions}
              onClose={toastOptions.isClosable ? close : undefined}
            />
          </ToastContainer>,
          document.body
        )}
    </ToastContext.Provider>
  );
};
