import React from 'react';

const mockFlights = [
  { id: 1, route: 'Delhi (DEL) to Mumbai (BOM)', airline: 'IndiGo', time: '10:30 AM', price: '₹4,500' },
  { id: 2, route: 'Bangalore (BLR) to Delhi (DEL)', airline: 'Air India', time: '02:15 PM', price: '₹6,200' },
  { id: 3, route: 'Mumbai (BOM) to Goa (GOI)', airline: 'Vistara', time: '06:00 PM', price: '₹3,800' },
];

const GuestPage = () => {
  return (
    <div className="view-container">
      <div className="hero-section">
        <h1>Welcome to SkyTickets</h1>
        <p>Explore our latest flights and destinations. Please log in to book your tickets.</p>
      </div>
      
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
            <button className="btn btn-secondary" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              Login to Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestPage;
