import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import DataView from "./components/DataView";
import TodoInput from "./components/TodoInput";
import Button from "./components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

const ShowInputButton = styled.div`
  position: absolute;
  z-index: 99999;
  right: 40px;
  bottom: 40px;
`;

function App() {
  const [toDo, setToDo] = useState("");

  const [toDoList, setToDoList] = useState([
    "react 공부하기",
    "typescript 공부하기",
    "운동하기",
  ]);

  const [showToDoInput, setShowToDoInput] = useState(true);

  const onAdd = (toDo: string) => {
    if (toDo === "") return;
    setToDoList([toDo, ...toDoList]);
    setToDo("");
    setShowToDoInput(false);
  };
  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete}></DataView>
      {showToDoInput && <TodoInput onAdd={onAdd} />}
      <TodoInput onAdd={onAdd} />
      <ShowInputButton>
        <Button label="할일추가" color="#304ffe" />
      </ShowInputButton>
    </Container>
  );
}

export default App;
