import React from "react";

function ChildComponent({ Increment }) {
  return (
    <div>
      <p>Child Components</p>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default ChildComponent;
