import { ButtonHTMLAttributes, forwardRef } from "react";
import { useAccordionContext } from "./AccordionContext";
import { combineClassNames } from "@/utils/common";
import { accordionButtonStyles } from "./styles.css";

export type AccordionButtonProps = {
  accordionKey: string;
  isActive: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const AccordionButton = forwardRef<
  HTMLButtonElement,
  AccordionButtonProps
>(({ accordionKey, isActive, className, onClick, children, ...props }, ref) => {
  const { onAccordionClick, size } = useAccordionContext();
  const classNames = combineClassNames(
    className,
    accordionButtonStyles({ size })
  );

  const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onAccordionClick(accordionKey);
    onClick?.(event);
  };
  return (
    <button
      className={classNames}
      onClick={buttonClickHandler}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
