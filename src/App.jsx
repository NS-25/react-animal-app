import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

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
    // above code is same like below one!!!
    // setAnimals([...animals, getRandomAnimal() = "one random animal example "gator"]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <>
      <div className="app">
        <button onClick={handleClick}>Add Animal</button>
        <div>{renderedAnimals}</div>
      </div>
    </>
  );
}

export default App;
