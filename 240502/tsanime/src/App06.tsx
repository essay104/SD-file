import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { click } from "@testing-library/user-event/dist/click";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

function App06() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };

  const boxVariants = {
    initial: {
      opacity: 0,
    },
    visible: { opacity: 1, scale: 1, rotateZ: 360 },
    leaving: { opacity: 0, scale: 0 },
  };
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App06;
