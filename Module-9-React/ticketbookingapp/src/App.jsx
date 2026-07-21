import React, { useState } from 'react';
import './App.css';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Example of using element variables for conditional rendering
  let content;
  if (isLoggedIn) {
    content = <UserPage />;
  } else {
    content = <GuestPage />;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          ✈️ SkyTickets
        </div>
        <div>
          {isLoggedIn ? (
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </header>

      <main>
        {content}
      </main>
    </div>
  );
}

export default App;
