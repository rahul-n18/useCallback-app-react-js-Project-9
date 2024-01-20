import "./App.css";
import ChildComponent from "./useCallback";
import React, { useState, useCallback } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const Increment = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <div className="App">
      <p>counter: {counter}</p>
      <ChildComponent Increment={Increment} />
    </div>
  );
}

export default App;
