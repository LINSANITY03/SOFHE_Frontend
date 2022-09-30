import React from "react";
import Sidebar from "./Sidebar_new";
import "./Calender.scss";
import Navbar from "./Navbar_new";
import Calendermodule from "../../components/Calender_module";

function Calender() {
  return (
    <div className="body__content">
      <Sidebar />
      <div className="right__hand">
        <Navbar />
        <div className="widget__container">
          <div className="working__calender">
            <Calendermodule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
