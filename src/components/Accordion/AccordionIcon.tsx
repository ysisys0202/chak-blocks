import { forwardRef, SVGAttributes } from "react";
import { useAccordionContext } from "./AccordionContext";
import { Icon, IconProps } from "@/components/Icon/Icon";
import { combineClassNames } from "@/utils/common";
import { accordionIconStyles } from "./styles.css";

const sizeMap = new Map([
  ["sm", 20],
  ["md", 24],
  ["lg", 26],
]);

export type AccordionIconProps = {
  name?: IconProps["name"];
  isActive: boolean;
  accordionKey: string;
} & SVGAttributes<SVGSVGElement>;

export const AccordionIcon = forwardRef<SVGSVGElement, AccordionIconProps>(
  ({ name = "chevron", isActive, accordionKey, className, ...props }, ref) => {
    const { size } = useAccordionContext();
    const classNames = combineClassNames(
      className,
      accordionIconStyles({ ...(isActive ? { isActive: true } : {}) })
    );
    return (
      <Icon
        name="chevron"
        size={sizeMap.get(size)}
        className={classNames}
        {...props}
      />
    );
  }
);
