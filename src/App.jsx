import "./App.css";
import { useState } from "react";

function App() {
  // add state
  const [count, setCount] = useState(0);
  // add event here
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </>
  );
}

export default App;
