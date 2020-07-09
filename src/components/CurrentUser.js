import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getUser, logout } from "../services/api";

const CurrentUser = () => {
  let history = useHistory();
  const handleLogout = () => {
    logout(() => history.push("/"));
  };
  return (
    <div className="d-flex border-blue">
      <div className="p-3">
        <h3>{getUser().name}</h3>
        <p>
          <span className="text-red">Email: </span>
          {getUser().email}
        </p>
        <Button onClick={handleLogout}>Sign Out</Button>
      </div>
    </div>
  );
};

export default CurrentUser;
