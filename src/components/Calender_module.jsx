import React from "react";
import "./Calender.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calender_module(props) {
  let cfinal_data = props.events.map((event) => ({
    title: event.title,
    date: event.date_only,
    id: event.id,
    backgroundColor: event.status == 0 ? "#62b976" : "#e09490",
  }));

  const handleDateClick = (arg) => {
    // bind with an arrow function
    props.showAllEvent(arg.dateStr);
  };

  return (
    <section>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        initialView="dayGridMonth"
        dayMaxEvents={true}
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
        events={cfinal_data}
      />
    </section>
  );
}

export default Calender_module;
