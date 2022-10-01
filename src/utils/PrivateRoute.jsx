import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../services/AuthContext";

const PrivateRoute = ({ children }) => {
  let { user } = useContext(AuthContext);
  return user ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
