import React, { useCallback, useState } from "react";
import Sidebar from "./Sidebar_new";
import "./Calender.scss";
import Navbar from "./Navbar_new";
import Calendermodule from "../../components/Calender_module";
import AddEvent from "../../components/AddEvent";

function Calender() {
  const [create, setCreate] = useState(false);
  const ShowCreateModel = useCallback(() => {
    setCreate(!create);
  }, [create]);

  return (
    <div className={"body__content"}>
      {create ? <div className="overlay"></div> : <></>}
      <div className={`${create ? "show__model" : "hide__model"}`}>
        {create ? <AddEvent ShowCreateModel={ShowCreateModel} /> : ""}
      </div>
      <Sidebar />
      <div className="right__hand">
        <Navbar />
        <div className="widget__container">
          <div className="working__calender">
            <Calendermodule create={create} ShowCreateModel={ShowCreateModel} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
