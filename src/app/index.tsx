import { Button } from "@ui/button";
import { Modal } from "@ui/modal/ui";
import { useState } from "react";

export const App = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [opened1, setOpened1] = useState<boolean>(false);

  return (
    <div className="wrapper">
      {/*<Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>*/}
      {/*<Button onClick={() => setOpened1(true)}>Открыть модальное окно 2</Button>*/}
      {/*<Modal open={opened} onClose={() => setOpened(false)}>*/}
      {/*  Модальное окно*/}
      {/*</Modal>*/}
      {/*<Modal*/}
      {/*  open={opened1}*/}
      {/*  onClose={() => setOpened1(false)}*/}
      {/*  withContainer={false}*/}
      {/*>*/}
      {/*  Модальное окно2*/}
      {/*</Modal>*/}
    </div>
  );
};
