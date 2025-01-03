import { ButtonHTMLAttributes } from "react";
import { test } from "./index.css.ts";

type Props = {
  size: "sm" | "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ size, children, ...props }: Props) => {
  console.log(props);
  return <button className={test}>Test</button>;
};

export default Button;
