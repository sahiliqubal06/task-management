import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => (
  <div className="max-w-xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>
    <TaskForm />
    <TaskList />
  </div>
);


export default App;
