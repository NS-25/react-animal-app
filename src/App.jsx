import "./App.css";

function App() {
  // add event here
  const handleMouseMove = () => {
    console.log("Button was clicked!");
  };
  return (
    <>
      <button onMouseMove={handleMouseMove}>Add Animal</button>
    </>
  );
}

export default App;
