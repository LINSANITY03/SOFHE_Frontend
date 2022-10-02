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
            <li>
              <FontAwesomeIcon icon={faHouseChimney} className="icon" />
              <span>Home</span>
            </li>
          </ul>
        </div>

        <div className="manage__content">
          <ul>
            <p className="title">Manage</p>
            <li>
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              <span>Calender</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faListCheck} className="icon" />
              <span>Events</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faImage} className="icon" />
              <span>Media</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faFile} className="icon" />
              <span>Documents</span>
            </li>
          </ul>
        </div>

        <div className="finance__content">
          <ul>
            <p className="title">Finance</p>
            <li>
              {" "}
              <FontAwesomeIcon icon={faCoins} className="icon" />
              <span>Statement</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMicrochip} className="icon" />
              <span>Prediction</span>
            </li>
          </ul>
        </div>

        <div className="extra__content">
          <ul>
            <p className="title">More</p>
            <li>
              <FontAwesomeIcon icon={faTrashCan} className="icon" />
              <span>Trash</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleInfo} className="icon" />
              <span>Notification</span>
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
            onClick={logoutUser}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
