import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "200px" },
};

function App() {
  return (
    <Wrapper>
      <Box
        transition={{ type: "spring", delay: 0.5 }}
        initial={{ scale: 2 }}
        animate={{ scale: 1, rotateZ: 720 }}
      />
    </Wrapper>
  );
}

export default App;
