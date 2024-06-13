import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Test = styled.div`
  width: 50px;
  height: 50px;
  opacity: 0;
`;

const text = () => {
  const [modalToggle, setModalToggle] = useState();

  const modalHandler = () => {};

  return <Test onClick={modalHandler}>text</Test>;
};

export default text;
