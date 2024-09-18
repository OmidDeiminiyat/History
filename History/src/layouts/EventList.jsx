import React from "react";

const EventList = ({ events }) => {
    console.log(events);
  if (events && events.length === 0) {
    
    return <p>No events found for this date.</p>;
  } 

  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          <strong>{event.year}</strong>: {event.text}
        </li>
      ))}
    </ul>
  );
};

export default EventList;
