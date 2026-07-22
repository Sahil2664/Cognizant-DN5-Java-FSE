import React, { useState } from 'react';

const mockCourses = [
  { id: 'crs1', title: 'React Front To Back', instructor: 'Brad Traversy' },
  { id: 'crs2', title: 'Advanced CSS and Sass', instructor: 'Jonas Schmedtmann' },
  { id: 'crs3', title: 'The Complete Node.js Developer', instructor: 'Andrew Mead' }
];

const CourseDetails = () => {
  const [showData, setShowData] = useState(true);

  return (
    <div className="section-container">
      <h2>
        Course Details
        <button className="btn btn-toggle" onClick={() => setShowData(!showData)}>
          Toggle Data
        </button>
      </h2>
      
      {/* Method 3: Using the Logical AND (&&) Operator */}
      {showData && (
        <div className="list-container">
          {mockCourses.map(course => (
            <div key={course.id} className="item-card" style={{ borderLeftColor: '#f59e0b' }}>
              <h3 className="item-title">{course.title}</h3>
              <p className="item-meta">Instructor: {course.instructor}</p>
            </div>
          ))}
        </div>
      )}

      {/* Logical AND for the empty state */}
      {!showData && (
        <div className="empty-state">
          <p>No courses found.</p>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
