import React from "react";
import SignIn from "./SignIn";
import { isLoggedIn } from "../services/api";
import Users from "./Users";

const Authentication = ({ loading }) => {
  if (loading) return null;
  return isLoggedIn() ? <Users /> : <SignIn />;
};

export default Authentication;
