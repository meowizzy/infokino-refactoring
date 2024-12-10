import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import cls from "./Button.module.scss";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  const { children, className, ...restProps } = props;

  return (
    <>
      <h1>aawwdadwa</h1>
      <button className={cn(className, cls.button)} {...restProps}>
        {children}
      </button>
    </>
  );
};
