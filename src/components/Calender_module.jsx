import React from "react";
import "./Calender.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calender_module(props) {
  const cfinal_data = props.events.map((event) => {
    return {
      title: event.title,
      date: event.date_only,
    };
  });

  const json_data = [
    { title: "First pay", date: "2022-10-02" },

    { title: "Mobile Phone Cover", date: "2022-10-02" },

    { title: "Mobile Phone Cover", date: "2022-10-02" },
    { title: "education loan", date: "2022-10-02" },
  ];
  console.log("cfinal_data", cfinal_data);
  console.log("json_data", json_data);

  return (
    <section>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        customButtons={{
          myCustomButton: {
            text: "+ Create",
            click: props.ShowCreateModel,
          },
        }}
        headerToolbar={{
          start: "title", // will normally be on the left. if RTL, will be on the right

          end: "myCustomButton today prev,next", // will normally be on the right. if RTL, will be on the left
        }}
        // initialEvents={[{ title: "event 3", date: "2022-10-02" }]}
        initialEvents={[cfinal_data]}
      />
    </section>
  );
}

export default Calender_module;
