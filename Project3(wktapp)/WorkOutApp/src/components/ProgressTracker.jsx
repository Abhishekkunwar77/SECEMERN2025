import React from "react";

const ProgressTracker = ({ logs }) => {
  return (
    <div>
      <h2>Progress Tracker</h2>
      {logs.length > 0 ? (
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              {log.workoutName} - {log.exercise} ({log.sets} sets, {log.reps} reps)
            </li>
          ))}
        </ul>
      ) : (
        <p>No progress yet.</p>
      )}
    </div>
  );
};

export default ProgressTracker;
