import React from "react";
import { useSelector } from "react-redux";
import Grandbox from "./Grandbox";

const Box = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      Box {count}
      <Grandbox />
    </div>
  );
};

export default Box;
