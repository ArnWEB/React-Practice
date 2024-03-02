import { useCallback, useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

  let changeColor = useCallback((newColor:string) => {
    setColor(newColor);
  }, ["blue"]);
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap gap-4 bottom-2 justify-center inset-x-0 px-2">
          <button className="btn btn-active btn-accent drop-shadow-xl" onClick={()=>{changeColor("green")}}>Accent</button>
          <button className="btn btn-active btn-primary drop-shadow-xl"onClick={()=>{changeColor("purple")}}>Purple</button>
          <button className="btn btn-active btn-secondary drop-shadow-xl"onClick={()=>{changeColor("pink")}}>Pinkish</button>
        </div>
      </div>
    </>
  );
}

export default App;
