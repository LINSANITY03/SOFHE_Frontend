import React from "react";
import "moment-timezone";
import "./AddEvent.scss";
import moment from "moment-timezone";

function AddEvent() {
  const cdate1 = moment().format("yy-MM-DD");
  return (
    <div className="addevent__content">
      <div className="top__bar">Add event</div>
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
              placeholder="Add Title"
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
              placeholder="Description for event"
              max_length="300"
              name="description"
              id="description"
            />
          </div>
          <div className="user__content">
            <label htmlFor="income">Income</label>
            <input type="number" id="income" step="2" name="income" required />
          </div>
          <div className="date__content">
            <label htmlFor="date">Date {cdate1}</label>
            <input type="date" id="date" name="date" max={cdate1} required />
          </div>
          <div className="user__content">
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
