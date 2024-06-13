import React from "react";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import Button from "./components/Button";
import Label from "./components/Label";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter - 1);
  };

  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
      <Title>Counter App</Title>
      <Content>
        <Button label="-" onClick={sub} />
        <Label />
        <Button label="+" onClick={add} />
      </Content>
    </Container>
  );
}

export default App;
