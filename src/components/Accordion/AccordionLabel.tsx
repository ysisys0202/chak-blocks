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
  const { size } = useAccordionContext();
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
