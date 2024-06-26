import React from "react";
import styled from "styled-components";
import Title from "./Title";
import TodoList from "./TodoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 32px;
  border-radius: 8px;
`;

interface Props {
  toDoList: string[];
  onDelete: (todo: string) => void;
}


const DataView = ({toDoList, onDelete}: Props) => {
  return (
    <Container>
      <Title label="할일목록" />
      <TodoList toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
};

export default DataView;
