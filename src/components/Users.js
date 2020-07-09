import React from "react";
import { CardColumns } from "react-bootstrap";

import User from "./User";
import { useUser } from "../providers/UsersProvider";
import CurrentUser from "./CurrentUser";

const Users = () => {
  const users = useUser();
  return (
    <div>
      <CurrentUser />
      <CardColumns>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </CardColumns>
    </div>
  );
};

export default Users;
