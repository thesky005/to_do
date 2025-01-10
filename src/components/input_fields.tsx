// input_fields.tsx

import React, { useState } from 'react';

interface TodoFormProps {
  onSubmit: (task: { date: string; time: string; priority: string; description: string }) => void;
}

const InputFields: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('Low');
  const [description, setDescription] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && time && description) {
      onSubmit({ date, time, priority, description });
      setDate('');
      setTime('');
      setPriority('Low');
      setDescription('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="date" className="font-semibold text-gray-700">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="time" className="font-semibold text-gray-700">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="priority" className="font-semibold text-gray-700">Priority:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="font-semibold text-gray-700">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            required
            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add To-Do
        </button>
      </form>
    </div>
  );
};

export default InputFields;
