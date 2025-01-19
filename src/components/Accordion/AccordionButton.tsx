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
>(({ accordionKey = "", className, onClick, children }, ref) => {
  const context = useAccordionContext();
  if (!context) {
    throw new Error(
      "AccordionIcon 컴포넌트는 Accordion 컴포넌트 안에서 사용 가능합니다."
    );
  }
  const { onAccordionClick, size } = context;
  const classNames = combineClassNames(
    className,
    accordionButtonStyles({ size })
  );

  const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onAccordionClick(accordionKey);
    onClick?.(event);
  };
  return (
    <button className={classNames} onClick={buttonClickHandler} ref={ref}>
      {children}
    </button>
  );
});
