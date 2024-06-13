import styled from "styled-components";
import React from "react";
import { useState } from "react";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 5px solid ${(props) => props.borderColor};
  display: flex;
  justify-content: ceneter;
  align-itmes: center;
  color: #fff;
`;

interface ContainerProps {
  bgColor: string;
  borderColor: string;
  text?: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default Text",
}: CircleProps) => {
  const [counter, setCounterr] = useState(1);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
