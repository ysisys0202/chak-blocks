import { combineClassNames } from "@/utils/common";
import { ElementType, forwardRef, HTMLAttributes } from "react";
import { accordionLabelStyles } from "./styles.css";
import { useAccordionContext } from "./AccordionContext";

export type AccordionLabelProps = {
  accordionKey?: React.ReactNode;
  isActive?: boolean;
  children: React.ReactNode;
  as?: ElementType;
} & HTMLAttributes<HTMLElement>;

export const AccordionLabel = forwardRef<
  HTMLHeadingElement,
  AccordionLabelProps
>(({ children, className, as: Components = "span", ...props }, ref) => {
  const context = useAccordionContext();
  if (!context) {
    throw new Error(
      "AccordionLabel 컴포넌트는 Accordion 컴포넌트 안에서 사용 가능합니다."
    );
  }
  const { size } = context;
  const classNames = combineClassNames(
    className,
    accordionLabelStyles({ size })
  );
  return (
    <Components className={classNames} ref={ref} {...props}>
      {children}
    </Components>
  );
});
