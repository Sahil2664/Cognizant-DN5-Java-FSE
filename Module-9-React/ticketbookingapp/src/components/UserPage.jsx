import React, { useState } from 'react';

const mockFlights = [
  { id: 1, route: 'Delhi (DEL) to Mumbai (BOM)', airline: 'IndiGo', time: '10:30 AM', price: '₹4,500' },
  { id: 2, route: 'Bangalore (BLR) to Delhi (DEL)', airline: 'Air India', time: '02:15 PM', price: '₹6,200' },
  { id: 3, route: 'Mumbai (BOM) to Goa (GOI)', airline: 'Vistara', time: '06:00 PM', price: '₹3,800' },
];

const UserPage = () => {
  const [bookedFlight, setBookedFlight] = useState(null);

  const handleBookTicket = (flight) => {
    setBookedFlight(flight);
    setTimeout(() => setBookedFlight(null), 4000);
  };

  return (
    <div className="view-container dashboard">
      <div className="dashboard-header">
        <span style={{ fontSize: '2rem' }}>👋</span>
        <div>
          <h2>Welcome back, User!</h2>
          <p style={{ color: 'var(--text-muted)' }}>You can now book tickets for available flights.</p>
        </div>
      </div>

      {bookedFlight && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.2)',
          border: '1px solid var(--success)',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          color: 'var(--success)',
          animation: 'fadeIn 0.3s ease'
        }}>
          ✅ Ticket successfully booked for <strong>{bookedFlight.route}</strong> on {bookedFlight.airline} ({bookedFlight.time}).
        </div>
      )}

      <div className="flights-grid">
        {mockFlights.map((flight) => (
          <div key={flight.id} className="flight-card">
            <div className="flight-header">
              <span className="flight-route">{flight.route}</span>
            </div>
            <div className="flight-details">
              <span>✈️ Airline: {flight.airline}</span>
              <span>🕒 Departure: {flight.time}</span>
            </div>
            <div className="flight-price">{flight.price}</div>
            <button 
              className="btn btn-success" 
              onClick={() => handleBookTicket(flight)}
            >
              Book Ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
