import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  height: 100vh;
  width: 100%;
`;

const App01 = () => {
  const [value, setValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={onSbumit}>
        <input type="text" onChange={onchange} placeholder="username" />
      </form>
    </Container>
  );
};

export default App01;
