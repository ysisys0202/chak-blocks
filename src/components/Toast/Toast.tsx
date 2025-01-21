import {
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
} from "react";
import * as colors from "@/constants/colors";
import { Typography } from "@/components/Typography";
import { Icon, IconProps } from "@/components/Icon";
import { combineClassNames } from "@/utils/common";
import {
  toastStyles,
  toastIconStyle,
  toastDescriptionStyle,
  toastCloseButtonStyle,
} from "./style.css";
import { Button } from "../Button";
import { useToast } from "./ToastContext";

export type ToastProps = {
  status?: "info" | "success" | "error" | "warning";
  title: ReactNode;
  description?: ReactNode;
  as?: ElementType;
} & HTMLAttributes<HTMLElement>;

const iconMap: Map<ToastProps["status"], IconProps["name"]> = new Map([
  ["info", "infomation"],
  ["success", "check"],
  ["error", "warning"],
  ["warning", "warning-triangle"],
]);

export const Toast = forwardRef<HTMLElement, ToastProps>(
  (
    {
      status = "info",
      title,
      description,
      className,
      as: Component = "div",
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(className, toastStyles({ status }));
    const { close } = useToast();
    const handleCloseButonClick = () => {
      close();
    };
    return (
      <Component className={classNames} ref={ref} {...props}>
        <Icon
          name={iconMap.get(status) as IconProps["name"]}
          color={colors.white}
          size={24}
          className={toastIconStyle}
        />
        <Button
          variant="text"
          className={toastCloseButtonStyle}
          onClick={handleCloseButonClick}
        >
          <Icon name="close" color="white" size={28} />
        </Button>
        <div className="content-area">
          <Typography variant="title5" as="strong" theme="light">
            {title}
          </Typography>
          {description && (
            <Typography theme="light" className={toastDescriptionStyle}>
              {description}
            </Typography>
          )}
        </div>
      </Component>
    );
  }
);
