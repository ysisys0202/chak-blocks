import { ElementType, forwardRef, HTMLAttributes, ReactNode } from "react";
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

export type ToastProps = {
  status?: "info" | "success" | "error" | "warning";
  title: ReactNode;
  description?: ReactNode;
  onClose?: () => void;
  as?: ElementType;
} & HTMLAttributes<HTMLDivElement>;

const iconMap: Map<ToastProps["status"], IconProps["name"]> = new Map([
  ["info", "infomation"],
  ["success", "check"],
  ["error", "warning"],
  ["warning", "warning-triangle"],
]);

export const defaultToastProps = {
  status: "info" as ToastProps["status"],
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      status = defaultToastProps.status,
      title,
      description,
      onClose,
      className,
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(className, toastStyles({ status }));
    return (
      <div className={classNames} ref={ref} data-testId="toast" {...props}>
        <Icon
          name={iconMap.get(status) as IconProps["name"]}
          color={colors.white}
          size={24}
          className={toastIconStyle}
        />
        {onClose && (
          <Button
            variant="text"
            className={toastCloseButtonStyle}
            onClick={onClose}
            data-testId="toast-close-button"
          >
            <Icon name="close" color="white" size={28} />
          </Button>
        )}
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
      </div>
    );
  }
);
