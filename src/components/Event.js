import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <h2 className ="event-title">{event.summary}</h2>
      <p>{event.created}</p>
      <p>
    <span className="location-icon"></span>
    {event.location}
  </p>
      <button
        className="details-btn"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails ? (
        <div className="details">
          <h3>Event Details:</h3>
          <p>Description: {event.description}</p>
          <p>Event status: {event.status}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;