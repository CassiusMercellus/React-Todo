import React from 'react';

interface TaskDisplayProps {
  task: string;
  description: string;
  completed: boolean;
  removeTask: () => void;
  clearCompleted: () => void;
}

const TaskDisplay: React.FC<TaskDisplayProps> = ({ task, description, removeTask }) => {
  return (
    <div className="bg-slate-600 m-4 rounded-lg w-64 h-72 text-center text-white flex flex-col justify-between">
      <div className="">
        <h2 className="font-bold">Task Name:</h2>
        <p>{task}</p>
        <h2 className="font-bold"> Task Description:</h2>
        <p className="flex flex-wrap overflow-y-auto h-36 hide-scrollbar">{description}</p>
      </div>
      <div className="flex justify-center">
        <button className="flex bg-slate-900 py-2 px-4 rounded-lg w-36 justify-center mb-2 hover:opacity-50" onClick={removeTask}>Completed</button>
      </div>
    </div>
  );
};

export default TaskDisplay;
