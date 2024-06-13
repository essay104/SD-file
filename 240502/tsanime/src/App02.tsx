import React from "react";
import styled from "styled-components";
import { motion, stagger } from "framer-motion";
import { click } from "@testing-library/user-event/dist/click";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  background-color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const hoverVariant = {
  hover: { scale: 2, rotateZ: 720 },
  click: { backgroundColor: "#ddd" },
};

function App02() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App02;
