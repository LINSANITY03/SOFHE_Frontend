import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../services/AuthContext";

const PrivateRouteLoggedIn = ({ children }) => {
  let { loginUser } = useContext(AuthContext);
  return loginUser.user ? <Navigate to={"/dashboard"} /> : children;
};

export default PrivateRouteLoggedIn;
