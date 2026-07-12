import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = ({ Name, School, Total, goal }) => {
  // Assuming Total is the total marks obtained and goal is the number of subjects
  // Or if goal is target percentage, etc. Let's just calculate (Total / goal).
  // If we take Total as sum of marks, and goal as number of subjects, the average is Total / goal.
  const average = (Total / goal).toFixed(2);
  
  return (
    <div className="score-card">
      <div className="card-header">
        <h2>Student Score Details</h2>
      </div>
      <div className="card-body">
        <div className="info-row">
          <span className="label">Name:</span>
          <span className="value">{Name}</span>
        </div>
        <div className="info-row">
          <span className="label">School:</span>
          <span className="value">{School}</span>
        </div>
        <div className="info-row">
          <span className="label">Total Marks:</span>
          <span className="value">{Total}</span>
        </div>
        <div className="info-row">
          <span className="label">Goal (Subjects):</span>
          <span className="value">{goal}</span>
        </div>
        
        <div className="average-box">
          <h3>Average Score</h3>
          <div className="average-value">{average}</div>
        </div>
      </div>
    </div>
  );
};

export default CalculateScore;
