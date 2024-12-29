import "./App.css";
import { useState } from "react";

function getRandomAnimal() {
  const animals = ["birds", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  // add state
  // const [count, setCount] = useState(0);
  // add event here
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </>
  );
}

export default App;
