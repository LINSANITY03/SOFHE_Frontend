import React from "react";
import styles from "./sign_up.module.css";
import sofha_logo from "../../assets/sofhe.png";
import { Link } from "react-router-dom";
import Countrydropdown from "../../utils/country_dropdown";

function sign_up() {
  return (
    <div className={styles.main__container}>
      <Link to="/">
        <img src={sofha_logo} alt="Sofhe" className="logo" />
      </Link>
      <div className={styles.body__div}>
        <div className={styles.left__div}>
          <ul className={styles.points}>
            <li>Get Started</li>
            <li>Cloud based Platform</li>
            <li>AI based Suggestion</li>
            <li>Financial overview</li>
          </ul>
        </div>
        <div className={styles.right__div}>
          <div className={styles.signup__contents}>
            <h4>Create your Sofhe account</h4>
            <div className={styles.email__div}>
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                title="example@gmail.com"
                placeholder="Email"
                maxLength={50}
                required
                minLength={11}
              />
            </div>
            <div className={styles.username__div}>
              <label>Username</label>
              <input
                type="text"
                name="user_name"
                title="Enter unique name"
                placeholder="Username"
                maxLength={50}
                required
                minLength={6}
              />
            </div>
            <div className={styles.country__div}>
              <label>Country</label>
              <Countrydropdown />
            </div>
            <div className={styles.password__div}>
              <label>Password</label>
              <input
                type="password"
                name="user_password"
                title="combination of letter, symbols and numbers"
                placeholder="Minimum 6 digit password"
                maxLength={20}
                required
                minLength={6}
              />
            </div>
            <div className={styles.acc_type__div}>
              <label>Account Type</label>
              <select name="user_acc">
                <option value="1">Individual</option>
                <option value="2">Family</option>
                <option value="3">SME</option>
              </select>
            </div>
            <div className={styles.submit__btn}>
              <button type="submit">Create Account</button>
            </div>
            <p className={styles.login__text}>
              Have an account?
              <span className={styles.signin__text}>
                <Link to="/login" style={{ color: "#05D43F" }}>
                  {" "}
                  Sign In
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sign_up;
