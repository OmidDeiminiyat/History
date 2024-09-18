import React from 'react';

// Main component to display events
const ByDate = ({ events }) => {
  if (!events) {
    return console.log('No Event to display');
     ;
  }

  return (
    <div>
      <h2>Historical Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.year}:</strong> {event.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ByDate;
