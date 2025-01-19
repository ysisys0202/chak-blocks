import { combineClassNames } from "@/utils/common";
import { forwardRef, HTMLAttributes, useEffect, useRef, useState } from "react";
import {
  accordionContentHeightVar,
  accordionContentStyles,
} from "./styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useAccordionContext } from "./AccordionContext";

export type AccordionContentProps = {
  isActive?: boolean;
  accordionKey?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ isActive, className, style, children }, ref) => {
  const [height, setHeight] = useState<number>(0);
  const { size } = useAccordionContext();

  const classNames = combineClassNames(
    className,
    accordionContentStyles({ size })
  );
  const styles = {
    ...(style || {}),
    ...assignInlineVars({ [accordionContentHeightVar]: `${height}px` }),
  };
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!innerRef.current) {
      return;
    }
    setHeight(isActive ? innerRef.current.clientHeight : 0);
  }, [isActive]);

  return (
    <div ref={ref} className={classNames} style={styles}>
      <div className="content-inner" ref={innerRef}>
        {children}
      </div>
    </div>
  );
});
