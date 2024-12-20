import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";
import cn from "classnames";

type PropsType = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  fullWidth?: boolean;
  value?: string;
  label?: string;
  type?: "text";
  theme?: "primary" | "danger" | "accent";
  dimension?: "sm" | "md" | "lg";
  onChange?: (value: string) => void;
};

export const Input: FC<PropsType> = (props) => {
  const {
    value,
    onChange,
    type = "text",
    theme = "primary",
    dimension = "lg",
    label,
    fullWidth = false,
    className,
    ...restProps
  } = props;
  const inputClassesCompose = cn(
    cls.input,
    cls[theme],
    cls[dimension],
    className,
  );
  const inputWrapperClassesCompose = cn(cls.inputWrapper, {
    [cls.fullWidth]: fullWidth,
  });

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={inputWrapperClassesCompose}>
      <label>
        {!!label && <p className={cls.label}>{label}</p>}
        <input
          value={value}
          type={type}
          className={inputClassesCompose}
          onChange={onChangeInput}
          {...restProps}
        />
      </label>
    </div>
  );
};
