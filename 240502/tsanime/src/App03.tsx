import React, { useRef } from "react";
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

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const hoverVariant = {
  hover: { scale: 2, rotateZ: 720 },
  click: { backgroundColor: "#ddd" },
  drag: { backgroundColor: "rgb(46,204,113)" },
  transition: { duration: 0.3 },
};

function App03() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={10}
          dragConstraints={biggerBoxRef}
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App03;
