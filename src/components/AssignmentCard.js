import React, { useState } from 'react';
import '../styles/AssignmentCard.css';

function AssignmentCard({ assignment }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    alert(`Assignment "${assignment.title}" submitted!`);
  };

  return (
    <div className="assignment-card">
      <h3>{assignment.title}</h3>
      <p>{assignment.description}</p>
      <p><strong>Due Date:</strong> {assignment.dueDate}</p>
      {!submitted ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <p className="submitted-message">✅ Submitted</p>
      )}
    </div>
  );
}

export default AssignmentCard;
