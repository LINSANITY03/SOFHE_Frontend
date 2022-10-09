import React, { useContext } from "react";
import profile_icon from "../../assets/profile_icon.png";
import sofhe__logo from "../../assets/sofhe.png";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faHouseChimney,
  faCircleInfo,
  faArrowRightToBracket,
  faListCheck,
  faImage,
  faFile,
  faTrashCan,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import AuthContext from "../../services/AuthContext";
import { Link } from "react-router-dom";

function Index() {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="total__div">
      <div className="sidebar__content">
        <div className="logo__container">
          <img src={sofhe__logo} alt="sofhe_logo" className="sofhe__logo" />
        </div>

        <div className="home__content">
          <ul>
            <Link to="/dashboard">
              <li>
                <FontAwesomeIcon icon={faHouseChimney} className="icon" />
                <span id="sb_link">Home</span>
              </li>
            </Link>
          </ul>
        </div>

        <div className="manage__content">
          <ul>
            <p className="title">Manage</p>
            <li>
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              <span id="sb_link">Calender</span>
            </li>
            <Link to="/dashboard/event">
              <li>
                <FontAwesomeIcon icon={faListCheck} className="icon" />
                <span id="sb_link">Events</span>
              </li>
            </Link>
            <li>
              <FontAwesomeIcon icon={faImage} className="icon" />
              <span id="sb_link">Media</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faFile} className="icon" />
              <span id="sb_link">Documents</span>
            </li>
          </ul>
        </div>

        <div className="finance__content">
          <ul>
            <p className="title">Finance</p>
            <li>
              {" "}
              <FontAwesomeIcon icon={faCoins} className="icon" />
              <span id="sb_link">Statement</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMicrochip} className="icon" />
              <span id="sb_link">Prediction</span>
            </li>
          </ul>
        </div>

        <div className="extra__content">
          <ul>
            <p className="title">More</p>
            <li>
              <FontAwesomeIcon icon={faTrashCan} className="icon" />
              <span id="sb_link">Trash</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleInfo} className="icon" />
              <span id="sb_link">Notification</span>
            </li>
          </ul>
        </div>

        <div className="bottom__content">
          <img
            src={profile_icon}
            alt="profile_icon"
            className="profile__icon"
          />
          <div className="user__details">
            <span>{user.username}</span>
            <span>{user.email}</span>
          </div>

          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            className="icon sign__out"
            title="Logout"
            onClick={logoutUser}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
