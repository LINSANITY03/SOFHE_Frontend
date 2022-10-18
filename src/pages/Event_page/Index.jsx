import React, { useContext, useCallback, useState } from "react";
import Sidebar from "../Calender_page/Sidebar_new";
import Navbar from "../Calender_page/Navbar_new";
import "./Index.scss";
import EventTable from "../../utils/EvenTable.tsx";

import { AiOutlineSearch } from "react-icons/ai";
import AuthContext from "../../services/AuthContext";

function Index() {
  const { events, user, getEvents } = useContext(AuthContext);

  // show/hide model to create event
  const [create, setCreate] = useState(false);

  const ShowCreateModel = useCallback(() => {
    setCreate(!create);
  }, [create]);

  return (
    <div className="body__content">
      <Sidebar />
      <div className="right__hand">
        <Navbar page_name="Event" />
        <div className="event__body">
          <div className="top__bar">
            <div className="add__button">
              <button
                type="button"
                id="event__creation"
                onClick={ShowCreateModel}
              >
                Add Event
              </button>
            </div>

            <div className="list__items">
              <div className="search__content">
                <input
                  type="search"
                  placeholder="Search..."
                  name="s"
                  className="search"
                />
                <AiOutlineSearch />
              </div>
            </div>
          </div>
          <div className="data__table">
            <EventTable
              events={events}
              user={user}
              getEvents={getEvents}
              create={create}
              ShowCreateModel={ShowCreateModel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
