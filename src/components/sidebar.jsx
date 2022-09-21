import React from "react";
import styles from "./sidebar.module.css";
import profile_img from "../assets/smile.jpg";
import sofha_logo from "../assets/sofhe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faMicrochip,
  faHouseChimney,
  faCircleInfo,
  faGears,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendar,
  faClock,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function sidebar() {
  return (
    <div className={styles.main__container}>
      <img src={sofha_logo} alt="Sofhe" className="logo" />
      <div className={styles.main__circle}>
        <img src={profile_img} alt="Profile_icon" />
        <div className={styles.upload__circle}>
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </div>
      </div>
      <div className={styles.user__content}>
        <p>Pujan Thing</p>
        <p>Software Engineer</p>
      </div>
      <div className={styles.sidebar__contents}>
        <ul>
          <Link to="/dashboard">
            <li>
              <FontAwesomeIcon icon={faHouseChimney} id={styles.icon} />
              <div id={styles.title}> Dashboard</div>
            </li>
          </Link>

          <Link to="/dashboard/activity">
            <li>
              <FontAwesomeIcon icon={faClock} id={styles.icon} />
              <div id={styles.title}>Activity</div>
            </li>
          </Link>
          <Link to="/dashboard/calender">
            <li>
              <FontAwesomeIcon icon={faCalendar} id={styles.icon} />
              <div id={styles.title}>Calender</div>
            </li>
          </Link>
          <Link to="/dashboard/prediction">
            <li>
              <FontAwesomeIcon icon={faMicrochip} id={styles.icon} />
              <div id={styles.title}>
                Prediction <span>Beta</span>
              </div>
            </li>
          </Link>
          <Link to="/dashboard/profile">
            <li>
              <FontAwesomeIcon icon={faUser} id={styles.icon} />
              <div id={styles.title}>Profile</div>
            </li>
          </Link>
          <Link to="/dashboard/support">
            <li>
              <FontAwesomeIcon icon={faCircleInfo} id={styles.icon} />
              <div id={styles.title}>Support</div>
            </li>
          </Link>
          <Link to="/dashboard/setting">
            <li>
              <FontAwesomeIcon icon={faGears} id={styles.icon} />
              <div id={styles.title}>Setting</div>
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.signout__content}>
        <p>
          Sign out <FontAwesomeIcon icon={faArrowRightToBracket} />
        </p>
      </div>
      <p className={styles.user__email}>Example@gmail.com</p>
    </div>
  );
}

export default sidebar;
