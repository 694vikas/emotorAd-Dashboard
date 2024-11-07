import React, { useState } from "react";
import CalendarView from "./CalendarView";
import EventList from "./EventList";
import EventForm from "./EventForm";

const Schedules = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Team Meeting", date: "2024-11-10", time: "10:00 AM" },
  ]);

  const addEvent = (newEvent) => setEvents([...events, newEvent]);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-semibold">Schedules</h1>
      <CalendarView events={events} />
      <EventList events={events} />
      <EventForm addEvent={addEvent} />
    </div>
  );
};

export default Schedules;
