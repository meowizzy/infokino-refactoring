import { ReactNode } from "react";
import { createPortal } from "react-dom";

type PropsType = {
  children: ReactNode;
  element?: HTMLElement;
};

export const Portal = (props: PropsType) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
