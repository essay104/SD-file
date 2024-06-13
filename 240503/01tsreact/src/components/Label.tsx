import React from "react";
import styled from "styled-components";

const Container = styled.span`
  font-size: 1.2rem;
  margin: 0 16px;
`;

const Label = () => {
  return <Container>{data}</Container>;
};

export default Label;
