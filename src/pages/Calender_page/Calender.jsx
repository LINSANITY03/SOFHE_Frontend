import React, { useCallback, useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar_new";
import "./Calender.scss";
import Navbar from "./Navbar_new";
import Calendermodule from "../../components/Calender_module";
import AddEvent from "../../components/AddEvent";
import AuthContext from "../../services/AuthContext";

function Calender() {
  const [create, setCreate] = useState(false);
  let { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  const ShowCreateModel = useCallback(() => {
    setCreate(!create);
  }, [create]);

  useEffect(() => {
    getEvents();
  }, []);

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
            <Calendermodule
              create={create}
              events={events}
              ShowCreateModel={ShowCreateModel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
