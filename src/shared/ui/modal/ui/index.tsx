import { memo, ReactNode } from "react";
import cn from "classnames";
import { useDocumentLocking } from "@hooks/useDocumentLock";
import { Button } from "@ui/button";
import { Portal } from "@ui/portal";
import CloseIcon from "@assets/svg/close.svg";
import cls from "./Modal.module.scss";

type PropsType = {
  children: ReactNode;
  open?: boolean;
  withContainer?: boolean;
  onClose?: () => void;
};

export const Modal = memo((props: PropsType) => {
  const { children, open, onClose, withContainer = true } = props;

  useDocumentLocking(open);

  const modalClassesCompose = cn(cls.modal, { [cls.modalOpened]: open });
  const modalCloseButtonClassesCompose = cn(cls.modalCloseButton, {
    [cls.closeButtonInContainer]: withContainer,
  });

  const onClickCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const renderModalCloseButton = () => {
    if (!onClose) {
      return null;
    }

    return (
      <Button
        className={modalCloseButtonClassesCompose}
        theme={"clear"}
        icon={<CloseIcon />}
        onClick={onClickCloseModal}
      />
    );
  };

  const renderModalContent = () => {
    if (withContainer) {
      return (
        <div className={cls.modalContent}>
          {renderModalCloseButton()}
          {children}
        </div>
      );
    }

    return (
      <>
        {renderModalCloseButton()}
        {children}
      </>
    );
  };

  return (
    <Portal>
      <div className={modalClassesCompose}>
        <div className={cls.modalBackdrop} onClick={onClickCloseModal}></div>
        <div className={cls.modalWrapper}>{renderModalContent()}</div>
      </div>
    </Portal>
  );
});
