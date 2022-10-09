import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faGear,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

function Navbar_new(props) {
  return (
    <div className="navbar_content">
      <div className="wrapper__content">
        <div className="page__title">{props.page_name}</div>
        <div className="utility__panel">
          <div className="item">
            <FontAwesomeIcon icon={faBell} />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faGear} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar_new;
