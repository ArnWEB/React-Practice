import { useCallback, useEffect, useState, useRef } from "react";

function print(str: any) {
  console.log(str);
}

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(true);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const copyPasswordClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  let passwordRef: any = useRef("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMPQRSTUVWXYZabcdefghijklmnopqrestuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    print(pass);
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);
  return (
    <>
      <div className="p-11">
        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered input-warning w-full max-w-xs"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              copyPasswordClipBoard();
            }}
          >
            Copy
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <div className="form-control">
            <label className="cursor-pointer label flex gap-3">
              <span className="label-text">Include Numbers</span>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                className="checkbox checkbox-warning"
                onChange={() => {
                  setnumberAllowed((prev) => !prev);
                }}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label flex gap-3">
              <span className="label-text">Include Special Character</span>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                className="checkbox checkbox-warning"
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }}
              />
            </label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="range range-warning"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
