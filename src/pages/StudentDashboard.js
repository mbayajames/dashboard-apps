import React from 'react';
import '../styles/StudentDashboard.css';
import AssignmentCard from '../components/AssignmentCard';

function StudentDashboard() {
  const dummyAssignments = [
    { id: 1, title: 'Math Homework', description: 'Solve equations', dueDate: '2025-02-15' },
    { id: 2, title: 'History Essay', description: 'Write about WW2', dueDate: '2025-02-20' },
  ];

  return (
    <div>
      <h2>Student Dashboard</h2>
      {dummyAssignments.map((assignment) => (
        <AssignmentCard key={assignment.id} assignment={assignment} />
      ))}
    </div>
  );
}

export default StudentDashboard;
