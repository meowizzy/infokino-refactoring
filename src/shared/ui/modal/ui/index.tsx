import { ReactNode } from "react";
import { Portal } from "@ui/portal";
import { Button } from "@ui/button";
import cls from "./Modal.module.scss";
import CloseIcon from "@assets/svg/close.svg";
import cn from "classnames";
import { useDocumentLock } from "@shared/libs/hooks/useDocumentLock";

type PropsType = {
  children: ReactNode;
  open?: boolean;
  withContainer?: boolean;
  onClose?: () => void;
};

export const Modal = (props: PropsType) => {
  const { children, open, onClose, withContainer = true } = props;

  useDocumentLock(open);

  return <></>;
};
