import "./App.css";
import { useCallback, useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);
  const addValue = useCallback(() => {
    console.count("Clicked");
    setCounter((prevCounter) => {
      if (prevCounter < 20) {
        prevCounter = prevCounter + 1;
      }
      return prevCounter;
    });
  }, [counter]);

  const removeValue = useCallback(() => {
    console.count("Clicked");
    setCounter((prevCounter) => {
      if (prevCounter >= 1) {
        prevCounter = prevCounter - 1;
      }
      return prevCounter;
    });
  }, [counter]);

  return (
    <>
      <h1>Aranb Working</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
