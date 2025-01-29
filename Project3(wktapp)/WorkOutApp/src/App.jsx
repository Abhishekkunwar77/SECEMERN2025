import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WorkoutList from './components/WorkoutList';
import WorkoutDetail from './components/WorkoutDetail';
import WorkoutLogs from './components/WorkoutLogs';
import Timer from './components/Timer';
import ProgressTracker from './components/ProgressTracker';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [workoutLogs, setWorkoutLogs] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const workouts = [
    {
      id: 1,
      name: 'Full Body Workout',
      description: 'A complete workout targeting all major muscle groups.',
      exercises: ['Push-ups', 'Squats', 'Lunges', 'Plank'],
      totalTime: 10,
    },
    {
      id: 2,
      name: 'Core Workout',
      description: 'Focus on strengthening your core muscles.',
      exercises: ['Crunches', 'Leg Raises', 'Russian Twists', 'Mountain Climbers'],
      totalTime: 10,
    },
    {
      id: 3,
      name: 'Cardio Blast',
      description: 'High-intensity cardio workout to burn calories.',
      exercises: ['Jumping Jacks', 'Burpees', 'High Knees', 'Jump Squats'],
      totalTime: 10,
    },
  ];

  const handleWorkoutLog = (workout, exercise, sets, reps, calories, duration) => {
    const newLog = {
      workoutName: workout.name,
      exercise,
      sets,
      reps,
      calories,
      duration,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    setWorkoutLogs([...workoutLogs, newLog]);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="main-content">
        <WorkoutList workouts={workouts} onSelectWorkout={setSelectedWorkout} />
        {selectedWorkout && (
          <div className="workout-detail-container">
            <WorkoutDetail
              workout={selectedWorkout}
              onWorkoutLog={handleWorkoutLog}
            />
            <Timer duration={selectedWorkout.totalTime} />
            <ProgressTracker logs={workoutLogs} />
          </div>
        )}
        <WorkoutLogs logs={workoutLogs} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
