import {Button} from "./components/button";
import {useState} from "react";
import homeIcon from "./assets/svg/home.svg?url";
import HomeIcon2 from "./assets/svg/home.svg";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{homeIcon}</h1>
      <HomeIcon2></HomeIcon2>
      <Button onClick={() => setCounter(counter + 1)}>
        Увеличить счетчик2
      </Button>
    </>
  );
};
