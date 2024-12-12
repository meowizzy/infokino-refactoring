import { Button } from "./components/button";
import { useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <Button onClick={onClick}>Увеличить счетч2222ик</Button>
    </>
  );
};
