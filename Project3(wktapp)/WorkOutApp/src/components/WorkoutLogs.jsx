import React from 'react';

const WorkoutLogs = ({ logs }) => {
  return (
    <div className="workout-logs">
      <h3>Workout Logs</h3>
      <table>
        <thead>
          <tr>
            <th>Workout</th>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Calories</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.workoutName}</td>
              <td>{log.exercise}</td>
              <td>{log.sets}</td>
              <td>{log.reps}</td>
              <td>{log.calories}</td>
              <td>{log.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutLogs;
