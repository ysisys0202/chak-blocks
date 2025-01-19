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
    const context = useAccordionContext();
    if (!context) {
      throw new Error(
        "AccordionIcon 컴포넌트는 Accordion 컴포넌트 안에서 사용 가능합니다."
      );
    }
    const { size } = context;
    const classNames = combineClassNames(
      className,
      accordionIconStyles({ ...(isActive ? { isActive: true } : {}) })
    );
    return (
      <Icon
        name="chevron"
        size={sizeMap.get(size)}
        className={classNames}
        ref={ref}
        {...props}
      />
    );
  }
);
