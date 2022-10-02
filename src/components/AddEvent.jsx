import React, { useContext } from "react";
import "moment-timezone";
import moment from "moment-timezone";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../services/AuthContext";
import "./AddEvent.scss";

function AddEvent(props) {
  const cdate1 = moment().format("yy-MM-DDThh:mm");

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
        _status: e.target.status.value,
        _datetime: e.target.datetime.value,
      }),
    });

    let data = await response.json();
    if (response.status === 201 || data.data === 1) {
      toast.success("Event Created");
      props.ShowCreateModel();
    } else {
      toast.error("Event Creation Failed");
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
              min="1"
              max="99999999.9999"
              step="any"
              name="income"
              required
            />
          </div>
          <div className="status__content">
            <label htmlFor="status">Status</label>
            <select name="status" id="status" required>
              <option value="">------------</option>
              <option value="0">Income</option>
              <option value="1">Expense</option>
            </select>
          </div>
          <div className="datetime__content">
            <label htmlFor="datetime">DateTime</label>
            <input
              type="datetime-local"
              id="datetime"
              name="datetime"
              max={cdate1}
              required
            />
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
