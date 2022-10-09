import React from "react";
import Sidebar from "../Calender_page/Sidebar_new";
import Navbar from "../Calender_page/Navbar_new";
import "./Index.scss";
import EventTable from "../../utils/EvenTable.tsx";

import { AiOutlineSearch } from "react-icons/ai";

function index() {
  return (
    <div className="body__content">
      <Sidebar />
      <div className="right__hand">
        <Navbar page_name="Event" />
        <div className="event__body">
          <div className="top__bar">
            <div className="add__button">
              <button type="button" id="event__creation">
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
          {/* <div className="item__list">
            <table>
              <tr>
                <th>checkbox</th>
                <th>Title //icon</th>
                <th>Description //icon</th>
                <th>Credit //icon</th>
                <th>Status //icon</th>
                <th>Created //icon</th>
                <th>Last Updated //icon</th>
              </tr>
              <tr>
                <td>checkbox</td>
                <td>this is title</td>
                <td>this is description</td>
                <td>this is credit</td>
                <td>this is status</td>
                <td>2022-10-03 08:53</td>
                <td>2022-10-8 11:29</td>
              </tr>
            </table>
          </div> */}
          <EventTable />
        </div>
      </div>
    </div>
  );
}

export default index;
