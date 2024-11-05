import React from "react";

const Child1 = ({ incrementCounter, btnColor }) => {
  return (
    <div>
      <button onClick={incrementCounter} style={{ color: btnColor }}>
        Increment
      </button>
    </div>
  );
};

export default Child1;
