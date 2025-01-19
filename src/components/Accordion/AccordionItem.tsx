import { ElementType, forwardRef, HTMLAttributes, ReactNode } from "react";
import { useAccordionContext } from "./AccordionContext";
import { combineClassNames } from "@/utils/common";
import { accordionItemStyle } from "./styles.css";

export type AccordionItemProps = {
  accordionKey: string;
  as?: ElementType;
  renderChildren: (accordionKey: string, isActive: boolean) => ReactNode;
} & HTMLAttributes<HTMLElement>;

export const AccordionItem = forwardRef<HTMLElement, AccordionItemProps>(
  (
    { accordionKey, renderChildren, className, as: Component = "li", ...props },
    ref
  ) => {
    const context = useAccordionContext();
    if (!context) {
      throw new Error(
        "AccordionItem 컴포넌트는 Accordion 컴포넌트 안에서 사용 가능합니다."
      );
    }
    const { activeItems } = context;
    const isActive = activeItems.includes(accordionKey);
    const classNames = combineClassNames(className, accordionItemStyle);
    return (
      <Component ref={ref} className={classNames} {...props}>
        {renderChildren(accordionKey, isActive)}
      </Component>
    );
  }
);
