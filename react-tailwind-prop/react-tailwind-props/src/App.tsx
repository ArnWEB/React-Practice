import "./App.css";

import "./Components/Card";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Hello world!</h1>
      <Card />
      <Card/>
    </>
  );
}

export default App;
