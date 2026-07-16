import React from 'react';
import officeSpaceImg from './assets/office_space.png';
import './App.css';

const officeSpaces = [
  {
    id: 1,
    name: "Downtown Premium Suite",
    rent: 75000,
    address: "123 Business Avenue, Downtown"
  },
  {
    id: 2,
    name: "Tech Park Standard Desk",
    rent: 45000,
    address: "B-Block, Tech Park Phase 2"
  },
  {
    id: 3,
    name: "Startup Garage Space",
    rent: 55000,
    address: "45 Innovation Road"
  },
  {
    id: 4,
    name: "Executive Penthouse Office",
    rent: 120000,
    address: "Top Floor, Skyline Building"
  }
];

function App() {
  return (
    <div className="app-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Office Space Rental</h1>
          <p>Find the perfect workspace for your business to thrive.</p>
        </div>
      </header>

      <main className="main-content">
        <section className="featured-section">
          <h2>Featured Workspace</h2>
          <div className="featured-image-container">
            <img 
              src={officeSpaceImg} 
              alt="Premium Office Space" 
              className="featured-image" 
            />
          </div>
        </section>

        <section className="listings-section">
          <h2>Available Office Spaces</h2>
          <div className="listings-grid">
            {officeSpaces.map((office) => (
              <div key={office.id} className="office-card">
                <h3>{office.name}</h3>
                <p className="address">
                  <span className="icon">📍</span> {office.address}
                </p>
                <div className="rent-container">
                  <span className="rent-label">Monthly Rent: </span>
                  <span 
                    className="rent-value" 
                    style={{ color: office.rent < 60000 ? '#ff4757' : '#2ed573' }}
                  >
                    ${office.rent.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
