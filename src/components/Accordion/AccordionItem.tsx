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
    const { activeItems } = useAccordionContext();

    const isActive = activeItems.includes(accordionKey);
    const classNames = combineClassNames(className, accordionItemStyle);
    return (
      <Component ref={ref} className={classNames} {...props}>
        {renderChildren(accordionKey, isActive)}
      </Component>
    );
  }
);
