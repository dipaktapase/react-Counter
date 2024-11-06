import React, { useState } from "react";

const Child2 = ({ ChangebtnColor }) => {
  const [input, setInput] = useState("");

  const handleChangeColor = () => {
    ChangebtnColor(input);
  };

  return (
    <div style={{ marginTop: 4, padding: 2, display: "flex", flexDirection: "column", width: "15%" }}>
      <input type="text" placeholder="Set Button Color" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
};

export default Child2;
