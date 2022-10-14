import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  let [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  let loginUser = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/auth/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.user_name.value,
        password: e.target.user_password.value,
      }),
    });

    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      toast.success("Login Success");
      <Navigate to="/dashboard" />;
    } else {
      toast.error("Bad User Credential");
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");

    <Navigate to="/" />;
  };

  let updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8000/auth/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens?.refresh,
      }),
    });
    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  let getEvents = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/all-tasks/${user.user_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      setEvents(data);
    } else if (response.statusText === "Unauthorized") {
      alert("Unauthorized");
    }
    return response;
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    authTokens: authTokens,
    events: events,
  };

  useEffect(() => {
    let twentyFourMinutes = 1000 * 60 * 29;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, twentyFourMinutes);

    return () => clearInterval(interval);
  }, [authTokens, loading]);

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
