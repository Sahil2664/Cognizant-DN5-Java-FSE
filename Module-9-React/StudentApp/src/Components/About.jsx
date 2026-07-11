import React, { Component } from 'react';
import './ComponentStyles.css';

class About extends Component {
  render() {
    return (
      <div className="card about-card">
        <div className="icon">ℹ️</div>
        <h2>Welcome to the About page of the Student Management Portal</h2>
      </div>
    );
  }
}

export default About;
