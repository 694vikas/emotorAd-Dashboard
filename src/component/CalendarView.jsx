import React from "react";

const CalendarView = ({ events }) => {
  return (
    <div className="p-4 mb-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-2 text-lg font-semibold">Calendar</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="py-2">
            <span className="font-semibold">{event.date}</span>: {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarView;
