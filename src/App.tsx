import { Button } from "./components/button";
import { useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);
  const awdawdwa: string = 1233131;

  const onClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      {awdawdwa}
      <h1>{counter}</h1>
      <Button onClick={onClick}>Увеличить счетч2222ик</Button>
    </>
  );
};
