import React from "react";
import { useParams, Outlet, useOutletContext } from "react-router-dom";
import users from "./db";
import { Link } from "react-router-dom";

const User = () => {
  console.log(useOutletContext());
  const { userId } = useParams();
  return (
    <>
      <h1>
        User with {userId} is name : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>See Followers</Link>
      <Outlet context={{ nameOfMyUsers: users[Number(userId) - 1].name }} />
    </>
  );
};

export default User;
