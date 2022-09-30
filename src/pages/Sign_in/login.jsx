import React, { useContext } from "react";
import sofha_logo from "../../assets/sofhe.png";
import login_styles from "./login.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../services/AuthContext";

function Login() {
  let { loginUser } = useContext(AuthContext);
  return (
    <div className={login_styles.main__container}>
      <Link to="/">
        <img src={sofha_logo} alt="Sofhe" className="logo" />
      </Link>

      <div className={login_styles.login__contents}>
        <h2>Log in</h2>
        <form onSubmit={loginUser}>
          <div className={login_styles.email__contents}>
            <label>Username</label>
            <input
              type="text"
              name="user_name"
              title="Unique username"
              placeholder="Username"
              maxLength={20}
              required
              minLength={4}
              id={login_styles._email}
            />
          </div>
          <div className={login_styles.password__contents}>
            <div className={login_styles.label__password}>
              <label>Password</label>
              <label>Forgot your password?</label>
            </div>
            <input
              type="password"
              name="user_password"
              title="Never use the same password for all your accounts."
              placeholder="Password"
              required
              maxLength={50}
              minLength={6}
              id={login_styles._password}
            />
            <div className={login_styles.remember__contents}>
              <input
                className="checkbox_content"
                type="checkbox"
                name="user_checkbox"
              />
              <label>Remember me</label>
            </div>
          </div>
          <div className={login_styles.buttons__contents}>
            <button className={login_styles.submit__btn} type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
      <p className={login_styles.signup__text}>
        Don't have an account?
        <span className={login_styles.signup__link}>
          <Link to="/signup" style={{ color: "#05D43F" }}>
            {" "}
            Sign up
          </Link>
        </span>
      </p>
    </div>
  );
}

export default Login;
