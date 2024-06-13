import React, useRef from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { ITodo, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  color: #000;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThis
      ? "red"
      : "#b2bec3"};
  flex-grow: 1;
  padding: 10px;
  height: 300px;
  transition: all 0.3 ease-in-out;
`;

const Form = styled.form`
  width: 100%;
  input {
    width:100%;
  }
`

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}



  const {register, setValue, handleSubmit} = useForm<IForm>()

  const onValid = ({toDO}: IForm) => {
    const newTodo = {
      id:Date.now()
      text:toDo,
    }
  };

  setToDos ((allBoard) => {
    setToDos.allBoards
  })

  // const inputRef = useRef<HTMLInputElement>(null);

  // const onClick = () => {
  //   inputRef.current?.focus();
  //   setTimeout(()=>{
  //     inputRef.current?.blur();
  //   }, 5000)
  // };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
      <input {...register("toDo", {required: true})} type="text" placeholder={`Add Task on ${boardId}`} />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo.id} toDoId={toDo.id} toDoText={toDo.text} index={index} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
