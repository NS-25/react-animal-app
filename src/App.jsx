import "./App.css";

function App() {
  // add event here
  const handleClick = () => {
    console.log("Button was clicked!");
  };
  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
    </>
  );
}

export default App;
