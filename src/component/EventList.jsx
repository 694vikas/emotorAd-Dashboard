import React from "react";

const EventList = ({ events }) => {
  return (
    <div className="p-4 mb-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-2 text-lg font-semibold">Event List</h2>
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4 font-semibold text-left">Title</th>
            <th className="p-4 font-semibold text-left">Date</th>
            <th className="p-4 font-semibold text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="border-b">
              <td className="p-4">{event.title}</td>
              <td className="p-4">{event.date}</td>
              <td className="p-4">{event.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
