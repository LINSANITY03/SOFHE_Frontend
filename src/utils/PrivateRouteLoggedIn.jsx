import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../services/AuthContext";

const PrivateRouteLoggedIn = () => {
  let { user } = useContext(AuthContext);
  return user ? <Navigate to={"/dashboard"} /> : <Outlet />;
};

export default PrivateRouteLoggedIn;
