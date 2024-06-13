import React, { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import TextInput from "./TextInput";
import Button from "./Button";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  z-index: 99999;
  width: 400px;
  height: 200px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

interface Props {
  onAdd: (toDo: string) => void;
}

const TodoInput = ({ onAdd }: Props) => {
  const [toDo, setToDo] = useState();

  const onAddToDo = () => {
    if (toDo === "") return;
    onAdd(toDo);
    setToDo("");
  };
  return (
    <Container>
      <Background />
      <Contents>
        <Title label="할 일 추가" />
        <InputContainer>
          <TextInput value={toDo} onChange={setToDo} />
          <Button label="추가" color="#304ffe" onClick={onAddToDo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};

export default TodoInput;
