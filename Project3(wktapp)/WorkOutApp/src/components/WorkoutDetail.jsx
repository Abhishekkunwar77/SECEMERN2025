import React, { useState } from 'react';

const WorkoutDetail = ({ workout, onWorkoutLog }) => {
  const [setsCompleted, setSetsCompleted] = useState(0);
  const [repsCompleted, setRepsCompleted] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState(workout?.exercises[0]);

  const handleSetCompletion = () => {
    setSetsCompleted(setsCompleted + 1);
    setRepsCompleted(repsCompleted + 30); // Example, modify based on actual logic
    setCaloriesBurned(caloriesBurned + 100); // Example, modify based on actual logic
  };

  const handleSaveLog = () => {
    onWorkoutLog(workout, selectedExercise, setsCompleted, repsCompleted, caloriesBurned);
    setSetsCompleted(0);
    setRepsCompleted(0);
    setCaloriesBurned(0);
  };

  return (
    <div className="workout-detail">
      <h3>{workout?.name}</h3>
      <h4>{workout?.description}</h4>

      <div>
        <h5>Exercises:</h5>
        <ul>
          {workout?.exercises.map((exercise, index) => (
            <li
              key={index}
              onClick={() => setSelectedExercise(exercise)}
              style={{
                cursor: 'pointer',
                fontWeight: exercise === selectedExercise ? 'bold' : 'normal',
              }}
            >
              {exercise}
            </li>
          ))}
        </ul>
      </div>

      <h5>{selectedExercise} Progress:</h5>
      <div>
        <p>Sets Completed: {setsCompleted}</p>
        <p>Reps Completed: {repsCompleted}</p>
        <p>Calories Burned: {caloriesBurned} kcal</p>

        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${(setsCompleted / 10) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <button onClick={handleSetCompletion}>Complete a Set</button>
      <button onClick={handleSaveLog}>Save Workout Log</button>
    </div>
  );
};

export default WorkoutDetail;
