import React from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./AddEvent.scss";
import moment from "moment-timezone";

function EditEvent(props) {
  let timedate = moment(props.selectevent.task_datetime).format(
    "YYYY-MM-DDTHH:mm"
  );

  let EditTask = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `http://127.0.0.1:8000/api/edit-tasks/${props.selectevent.id}/${props.user.user_id}`,
      {
        method: "POST",
        headers: {
          // Authorization: "Bearer " + String(authTokens.access),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _title: e.target.title.value,
          _description: e.target.description.value,
          _income: e.target.income.value,
          _status: e.target.status.value,
          _datetime: e.target.datetime.value,
        }),
      }
    );

    let data = await response.json();
    if (response.status === 202) {
      toast.success(data.message);

      props.ShowEditModel();
      props.getEvents();
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="addevent__content">
      <div className="top__bar">
        <div className="title">Edit event </div>
        <div className="model__close" onClick={props.ShowEditModel}>
          <FontAwesomeIcon icon={faClose} />
        </div>
      </div>
      <form onSubmit={EditTask}>
        <div className="body__content">
          <input
            type="hidden"
            value={props.user.user_id}
            name="_user_id"
            disabled
            required
          />
          <div className="title__content">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              title="Event Title"
              maxLength="20"
              defaultValue={props.selectevent.title}
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
              defaultValue={props.selectevent.description}
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
              defaultValue={props.selectevent.credit}
              min="1"
              max="99999999.9999"
              step="any"
              name="income"
              required
            />
          </div>
          <div className="status__content">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              defaultValue={props.selectevent.status ? "1" : "0"}
              required
            >
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
              defaultValue={timedate}
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

export default EditEvent;
