import React, { useState } from 'react';

const SyntheticEventButton = () => {
  const [eventDetails, setEventDetails] = useState(null);

  // Function to handle the synthetic event
  const handlePress = (e) => {
    // e is a SyntheticEvent in React
    setEventDetails({
      type: e.type,
      clientX: e.clientX,
      clientY: e.clientY,
      target: e.target.tagName
    });
    
    // Display the exact message required by the exercise
    alert('I was clicked');
  };

  return (
    <div className="card">
      <h2>Synthetic Events</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        Button invoking synthetic event 'OnPress' to display "I was clicked".
      </p>
      
      <div style={{ marginTop: '1rem' }}>
        <button className="btn btn-primary" onClick={handlePress}>
          Click Me (OnPress)
        </button>
      </div>

      {eventDetails && (
        <div className="message-box">
          <strong>Synthetic Event Details:</strong>
          <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Event Type: {eventDetails.type}</li>
            <li>Target: {eventDetails.target}</li>
            <li>Coordinates: ({eventDetails.clientX}, {eventDetails.clientY})</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SyntheticEventButton;
