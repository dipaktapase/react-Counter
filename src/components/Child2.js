import React, { useState } from "react";

const Child2 = ({ ChangebtnColor }) => {
  const [input, setInput] = useState("");
  console.log(input);

  const handleChangeColor = () => {
    ChangebtnColor(setInput);
  };

  return (
    <div style={{ marginTop: 4 }}>
      <input type="text" placeholder="Set Button Color" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
};

export default Child2;
