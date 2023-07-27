import React, { useContext } from "react";
import "moment-timezone";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../services/AuthContext";
import "./AddEvent.scss";

function AddEvent(props) {
  let { user, authTokens } = useContext(AuthContext);
  let AddingTasks = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `http://127.0.0.1:8000/api/add-tasks/${user.user_id}`,
      {
        method: "POST",
        headers: {
          // Authorization: "Bearer " + String(authTokens.access),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: e.target.title.value,
          description: e.target.description.value,
          credit: e.target.income.value,
          status: e.target.status.value,
          task_datetime: e.target.datetime.value,
        }),
      }
    );

    let data = await response.json();
    if (response.status === 201) {
      toast.success(data.message);

      props.ShowCreateModel();
      props.getEvents();
    } else {
      toast.error(data.message);
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
          <div className="title__content">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              title="Event Title"
              maxLength="20"
              id="title"
              name="title"
              required
            />
          </div>
          <div className="description__content">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              maxLength="300"
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
