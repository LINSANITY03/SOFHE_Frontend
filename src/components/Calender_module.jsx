import React from "react";
import "./Calender.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calender_module(props) {
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
        events={[
          // { title: "event 3", date: "2022-10-01", display: "background" },
          // { title: "event 4", date: "2022-10-01", display: "background" },
          // { title: "event 5", date: "2022-10-01", display: "background" },
          // { title: "event 6", date: "2022-10-01", display: "background" },
          { title: "event 7", date: "2022-10-01", display: "background" },
        ]}
      />
    </section>
  );
}

export default Calender_module;
