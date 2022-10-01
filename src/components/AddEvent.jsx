import React from "react";
import "moment-timezone";
import "./AddEvent.scss";
import moment from "moment-timezone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function AddEvent(props) {
  const cdate1 = moment().format("yy-MM-DD");
  return (
    <div className="addevent__content">
      <div className="top__bar">
        <div className="title">Add event</div>
        <div className="model__close" onClick={props.ShowCreateModel}>
          <FontAwesomeIcon icon={faClose} />
        </div>
      </div>
      <form>
        <div className="body__content">
          <div className="user__content">
            <label htmlFor="user">User</label>
            <input
              type="text"
              value="admin"
              name="user"
              id="user"
              disabled
              required
            />
          </div>
          <div className="title__content">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              title="Event Title"
              max_length="20"
              id="title"
              name="title"
              required
            />
          </div>
          <div className="description__content">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              max_length="300"
              name="description"
              id="description"
            />
          </div>
          <div className="income__content">
            <label htmlFor="income">Income</label>
            <input
              type="number"
              id="income"
              placeholder="Decimal or real value"
              step="2"
              name="income"
              required
            />
          </div>
          <div className="date__content">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" max={cdate1} required />
          </div>
          <div className="time__content">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" required />
          </div>
        </div>
        <div className="btn__content">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddEvent;
