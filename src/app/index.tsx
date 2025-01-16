import { Button } from "@ui/button";
import { Modal, useModal } from "@ui/modal";
import { Tabs } from "@ui/tabs";
import { TabsDataType } from "@ui/tabs/types";

export const App = () => {
  const { modalProps, closeModal, openModal } = useModal();

  const tabsDataSource: TabsDataType[] = [
    {
      key: "1",
      label: "Вход",
      children: "Авторизация",
    },
    {
      key: "2",
      label: "Регистрация",
      children: "Зарегистрироваться",
    },
  ];

  return (
    <div className="wrapper">
      <Button onClick={openModal}>Открыть модальное окно</Button>
      <Modal open={modalProps.visible} onClose={closeModal}>
        <Tabs items={tabsDataSource} defaultKey={"1"} />
      </Modal>
    </div>
  );
};
