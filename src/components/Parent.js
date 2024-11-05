import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [btnColor, setBtnColor] = useState("yellow");

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const changebtnColor = (color) => {
    setBtnColor(color);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <Child1 incrementCounter={incrementCounter} btnColor={btnColor} />
      <Child2 ChangebtnColor={changebtnColor} />
    </div>
  );
};

export default Parent;
