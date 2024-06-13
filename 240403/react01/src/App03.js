import "./App.css";
import Viewer01 from "./components/Viewer01";
import Controller from "./components/Controller";
import { useEffect, useState, useRef } from "react";

function App() {
  useEffect(() => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const didMountRef = useRef();
    console.didMountRef = useRef();
    useEffect(() => {
      if (!didMountRef.current) {
        didMountRef.current = true;
        return;
      } else {
        console.log("컴포넌트 업데이트");
      }
    });

    useEffect(() => {
      console.log("컴포넌트 마운트");
    }, []);

    setText("count 업데이트", count);
  }, [count]);
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input />
      </section>
      <section>
        <Viewer01 />
      </section>
      <section>
        <Controller />
      </section>
    </div>
  );
}

export default App;
