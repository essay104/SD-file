import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUsers: string;
}

const Followers = () => {
  const { nameOfMyUsers } = useOutletContext<IFollowersContext>();
  return <div>Here is {nameOfMyUsers}의 Followers</div>;
};

export default Followers;
