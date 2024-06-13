import { Styled } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor={"teal"} />
      <Circle bgColor={"tomato"} text="Im here" />
    </div>
  );
}

export default App;
