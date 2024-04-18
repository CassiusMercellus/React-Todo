// Dashboard.tsx

import React, { useState } from "react";
import TaskDisplay from "./TaskDisplay";
import { ImCancelCircle } from "react-icons/im";
import Header from "./Header";

interface Task {
  id: number;
  name: string;
  description: string;
}

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: tasks.length + 1,
      name: taskName,
      description: taskDescription,
    };
    setTasks([...tasks, newTask]);
    setTaskName("");
    setTaskDescription("");
  };

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  function toggleVisibility() {
    const div = document.querySelector("#panel");
    div.classList.toggle("hidden");
  }

  return (
    <div>
      <Header toggleVisibility={toggleVisibility} /> {/* Pass toggleVisibility function as a prop */}
      <div id="panel" className="absolute z-1 w-full flex justify-center items-center">
        <div className="m-16 bg-slate-500 p-8 rounded-lg flex flex-col w-96 h-96">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-black font-bold text-2xl">Create a Task</h1>
            <button className="hover:opacity-50" onClick={toggleVisibility}>
              <ImCancelCircle size={20}/>
            </button>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input 
              type="text" 
              className='rounded-md p-2 mb-4' 
              placeholder='Please enter a task' 
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)} 
            />
            <textarea 
              className='rounded-md p-2 h-36 mb-4' 
              placeholder='Please enter a description' 
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)} 
            />
            <button type='submit' className="p-4">
              <p className="p-2 bg-slate-900 hover:opacity-50 text-white rounded-md">Add Task</p>
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center flex-wrap ml-52">
        {tasks.map(task => (
          <TaskDisplay key={task.id} task={task.name} description={task.description} removeTask={() => removeTask(task.id)} clearCompleted={clearCompleted} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
