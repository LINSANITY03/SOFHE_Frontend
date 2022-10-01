import React, { useContext } from "react";
import "moment-timezone";
import moment from "moment-timezone";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../services/AuthContext";
import "./AddEvent.scss";

function AddEvent(props) {
  const cdate1 = moment().format("yy-MM-DD");
  let { user, authTokens } = useContext(AuthContext);
  let AddingTasks = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/api/add-tasks/", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _user: e.target._user_id.value,
        _title: e.target.title.value,
        _description: e.target.description.value,
        _income: e.target.income.value,
        _date: e.target.date.value,
        _time: e.target.time.value,
      }),
    });

    let data = await response.json();
    if (response.status === 201) {
      toast.success("Event Created");
      console.log(data);
      props.ShowCreateModel();
    } else {
      alert("unsuccessful");
      toast.warning("Event Creation Failed");
    }
  };

  return (
    <div className="addevent__content">
      <div className="top__bar">
        <div className="title">Add event </div>
        <div className="model__close" onClick={props.ShowCreateModel}>
          <FontAwesomeIcon icon={faClose} />
        </div>
      </div>
      <form onSubmit={AddingTasks}>
        <div className="body__content">
          <input
            type="hidden"
            value={user.user_id}
            name="_user_id"
            disabled
            required
          />
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
              step="any"
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
