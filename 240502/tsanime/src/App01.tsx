import React from "react";
import styled from "styled-components";
import { motion, stagger } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2)
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Circle = styled(motion.div)`
  width: 70px;
  hegiht: 70px;
  background: #fff;
  border-radius: 70px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  place-self: center;
`;

const boxVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: { opacity: 1, scale: 1 },
  transition: {
    type: "spring",
    duration: 0.5,
    bounce: 0.5,
    delayChildren: 0.5,
    staggerChildren: 1,
  },
};

const circleVariants = {
  start: { scale: 0, y: -200 },
  end: {
    opacity: 1,
    scale: 2,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.5,
      y: 0,
    },
  },
};

function App01() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} initial="start" animate="end" />
        <Circle variants={circleVariants} initial="start" animate="end" />
        <Circle variants={circleVariants} initial="start" animate="end" />
        <Circle variants={circleVariants} initial="start" animate="end" />
      </Box>
    </Wrapper>
  );
}

export default App01;
