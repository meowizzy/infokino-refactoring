import {Button} from "./components/button";
import {useState} from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <Button onClick={() => setCounter(counter + 1)}>
        Увеличить счетчик
      </Button>
    </>
  );
};