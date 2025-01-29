import React from 'react';

const WorkoutList = ({ workouts, onSelectWorkout }) => {
  return (
    <div className="workout-list">
      {workouts.map((workout) => (
        <div key={workout.id} className="workout-item">
          <h3>{workout.name}</h3>
          <button onClick={() => onSelectWorkout(workout)}>Select Workout</button>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
