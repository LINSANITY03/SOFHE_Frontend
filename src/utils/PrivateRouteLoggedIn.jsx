import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../services/AuthContext";

const PrivateRouteLoggedIn = ({ children }) => {
  console.log("this is privaterouteloggedin");
  let { loginUser } = useContext(AuthContext);
  return loginUser.user ? <Navigate to={"/dashboard"} /> : children;
};

export default PrivateRouteLoggedIn;
