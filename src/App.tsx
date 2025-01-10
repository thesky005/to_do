import { useState } from 'react';
import InputFields from './components/input_fields'; // Import the InputFields component

function App() {
  // Function to handle form submission
  const handleSubmit = (task: { date: string; time: string; priority: string; description: string }) => {
    console.log('Task Submitted:', task);
    // Add logic to save the task or display it, for example:
    // setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      {/* Render the InputFields component */}
      <InputFields onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
