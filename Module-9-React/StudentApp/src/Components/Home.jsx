import React, { Component } from 'react';
import './ComponentStyles.css';

class Home extends Component {
  render() {
    return (
      <div className="card home-card">
        <div className="icon">🏠</div>
        <h2>Welcome to the Home page of Student Management Portal</h2>
      </div>
    );
  }
}

export default Home;
