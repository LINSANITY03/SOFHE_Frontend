import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../services/AuthContext";
import { toast } from "react-toastify";

const PrivateRoute = () => {
  let { user } = useContext(AuthContext);
  return user ? (
    <Outlet />
  ) : (
    <>
      {toast.warning("Login First")}
      <Navigate to="/login" />
    </>
  );
};

export default PrivateRoute;
