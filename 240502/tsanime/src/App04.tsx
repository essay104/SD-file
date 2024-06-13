import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { click } from "@testing-library/user-event/dist/click";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 200vh;
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
  drag: { backgroundColor: "rgb(46,204,113)" },
  transition: { duration: 0.3 },
};

function App04() {
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    scrollY.on("change", () =>
      console.log(scrollY.get(), scrollYProgress.get())
    );
  }, []);

  const x = useMotionValue(0);

  const test = useTransform(x, [-800, 0, 800], [2, 1, 0]);

  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rga(0, 83, 238))",
      "linear-gradient(135deg, rgb(238, 0, 153), rga(221, 0, 218))",
      "linear-gradient(135deg, rgb(0, 238, 155), rga(238, 178, 0))",
    ]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, scale }} drag dragSnapToOrigin />
    </Wrapper>
  );
}

export default App04;
