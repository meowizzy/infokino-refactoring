import "./styles/index.scss";
import SearchIcon from "shared/assets/svg/search.svg";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Tabs, TabsDataType } from "@ui/tabs";

const tabs: Array<TabsDataType> = [
  {
    label: "Описание",
    key: "description",
    children: "Children1",
  },
  {
    label: "Отзывы",
    key: "reviews",
    children: "Children2",
  },
];

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
      <Input
        placeholder={"Введите имя пользователя"}
        prefix={<SearchIcon />}
        suffix={<SearchIcon />}
      />
      <br />
      <Input
        placeholder={"Введите имя пользователя"}
        dimension={"sm"}
        prefix={<SearchIcon />}
        suffix={<SearchIcon />}
      />
      <br />
      <Input
        placeholder={"Введите имя пользователя"}
        dimension={"md"}
        prefix={<SearchIcon />}
        suffix={<SearchIcon />}
      />
      <br />
      <Input placeholder={"Введите имя пользователя"} theme={"danger"} />
      <br />
      <Input
        label={"Имя"}
        placeholder={"Введите имя пользователя"}
        theme={"danger"}
        dimension={"sm"}
      />
      <br />
      <Input
        label={"Имя"}
        placeholder={"Введите имя пользователя"}
        theme={"danger"}
        dimension={"md"}
      />
      <br />
      <Input
        label={"Имя"}
        placeholder={"Введите имя пользователя"}
        theme={"accent"}
      />
      <br />
      <Input
        label={"Имя"}
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
      <br />
      <Tabs items={tabs} defaultKey={"reviews"} />
    </>
  );
};
