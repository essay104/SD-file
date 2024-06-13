import "./App.css";
import Viewer01 from "./components/Viewer01";
import Controller from "./components/Controller";

function App() {
  return (
    <div className="App">
      <h1>Simple Counter</h1>
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
