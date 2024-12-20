import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";
import cn from "classnames";
import cls from "./Button.module.scss";

type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: "primary" | "danger" | "clear" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  loading?: boolean;
};

export const Button: FC<PropsType> = memo((props) => {
  const {
    theme = "primary",
    size = "lg",
    className,
    icon,
    children,
    loading,
    disabled,
    ...restProps
  } = props;

  const onlyIcon = !!icon && !children;

  const classesCompose = cn(
    { [cls.isLoading]: loading },
    { [cls.onlyIcon]: onlyIcon },
    { [cls[size]]: theme !== "clear" },
    cls.button,
    cls[theme],
    className,
  );

  return (
    <button
      className={classesCompose}
      disabled={disabled || loading}
      {...restProps}
    >
      {!!icon && !loading && icon}
      {!!children && <span>{children}</span>}
    </button>
  );
});
