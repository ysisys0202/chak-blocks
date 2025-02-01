import { ElementType, forwardRef, HTMLAttributes, useState } from "react";
import { AccordionContext } from "./AccordionContext";
import { AccordionItem } from "./AccordionItem";
import { AccordionContent } from "./AccordionContent";
import { AccordionLabel } from "./AccordionLabel";
import { AccordionButton } from "./AccordionButton";
import { combineClassNames } from "@/utils/common";
import { accordionStyle } from "./styles.css";
import { AccordionIcon } from "./AccordionIcon";

export type AccordionProps = {
  initActiveItems?: string[];
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  as?: ElementType;
} & HTMLAttributes<HTMLElement>;

export const defaultAccordionProps = {
  size: "md" as Exclude<AccordionProps["size"], undefined>,
  as: "ul",
};

const AccordionContainer = forwardRef<HTMLElement, AccordionProps>(
  (
    {
      initActiveItems,
      size = defaultAccordionProps.size,
      children,
      className,
      as: Component = defaultAccordionProps.as,
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(className, accordionStyle);

    const [activeItems, setActiveItems] = useState(initActiveItems || []);

    const handleAccordionClick = (item: string) => {
      const hasItem = activeItems.includes(item);
      if (hasItem) {
        setActiveItems(activeItems.filter((activeItem) => activeItem !== item));
      } else {
        setActiveItems([...activeItems, item]);
      }
    };
    return (
      <AccordionContext.Provider
        value={{
          activeItems,
          size,
          onAccordionClick: handleAccordionClick,
        }}
      >
        <Component className={classNames} ref={ref} {...props}>
          {children}
        </Component>
      </AccordionContext.Provider>
    );
  }
);

type AccordionSubComponents = typeof AccordionContainer & {
  Item: typeof AccordionItem;
  Button: typeof AccordionButton;
  Label: typeof AccordionLabel;
  Content: typeof AccordionContent;
  Icon: typeof AccordionIcon;
};

export const Accordion = AccordionContainer as AccordionSubComponents;

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Label = AccordionLabel;
Accordion.Icon = AccordionIcon;
Accordion.Content = AccordionContent;
