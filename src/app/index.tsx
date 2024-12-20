import "./styles/index.scss";
import { Button } from "shared/ui/button/ui";
import SearchIcon from "shared/assets/svg/search.svg";
import { Input } from "shared/ui/input/ui";

export const App = () => {
  return (
    <>
      <Button theme={"accent"} size={"sm"}>
        Отправить
      </Button>
      <Button theme={"primary"} icon={<SearchIcon />} size={"md"}>
        Отправить
      </Button>
      <Button theme={"danger"} icon={<SearchIcon />} size={"lg"} />
      <Button theme={"clear"} icon={<SearchIcon />}>
        Отправить
      </Button>
      <br />
      <Input placeholder={"Введите имя пользователя"} />
      <br />
      <Input placeholder={"Введите имя пользователя"} dimension={"sm"} />
      <br />
      <Input placeholder={"Введите имя пользователя"} dimension={"md"} />
      <br />
      <Input placeholder={"Введите имя пользователя"} theme={"danger"} />
      <br />
      <Input
        placeholder={"Введите имя пользователя"}
        theme={"danger"}
        dimension={"sm"}
      />
      <br />
      <Input
        placeholder={"Введите имя пользователя"}
        theme={"danger"}
        dimension={"md"}
      />
      <br />
      <Input placeholder={"Введите имя пользователя"} theme={"accent"} />
      <br />
      <Input
        placeholder={"Введите имя пользователя"}
        theme={"accent"}
        dimension={"md"}
      />
      <br />
      <Input
        placeholder={"Введите имя пользователя"}
        theme={"accent"}
        dimension={"lg"}
      />
    </>
  );
};
