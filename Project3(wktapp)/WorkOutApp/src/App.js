import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WorkoutList from './components/WorkoutList';
import WorkoutDetail from './components/WorkoutDetail';
import WorkoutLogs from './components/WorkoutLogs'; // Import the log component
import './App.css';

const App = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [workoutLogs, setWorkoutLogs] = useState([]);

  const workouts = [
    {
      id: 1,
      name: 'Full Body Workout',
      description: 'A complete workout targeting all major muscle groups.',
      exercises: ['Push-ups', 'Squats', 'Lunges', 'Plank'],
      totalTime: 30,
    },
    {
      id: 2,
      name: 'Core Workout',
      description: 'Focus on strengthening your core muscles.',
      exercises: ['Crunches', 'Leg Raises', 'Russian Twists', 'Mountain Climbers'],
      totalTime: 25,
    },
    {
      id: 3,
      name: 'Cardio Blast',
      description: 'High-intensity cardio workout to burn calories.',
      exercises: ['Jumping Jacks', 'Burpees', 'High Knees', 'Jump Squats'],
      totalTime: 20,
    },
  ];

  const handleWorkoutLog = (workout, exercise, sets, reps, calories) => {
    const newLog = {
      workoutName: workout.name,
      exercise,
      sets,
      reps,
      calories,
      date: new Date().toLocaleDateString(),
    };
    setWorkoutLogs([...workoutLogs, newLog]);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <WorkoutList workouts={workouts} onSelectWorkout={setSelectedWorkout} />
        
        {selectedWorkout && (
          <div className="workout-detail-container">
            <WorkoutDetail
              workout={selectedWorkout}
              onWorkoutLog={handleWorkoutLog}
            />
          </div>
        )}
        
        <WorkoutLogs logs={workoutLogs} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
