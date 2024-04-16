import React, { useState } from 'react';
import { ImCancelCircle } from "react-icons/im";


function Dashboard() {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value)
        document.getElementById("input").value = "";
        setValue("");
    }
    return (
      <div className="absolute z-1 w-full flex justify-center items-center">
        <div className="m-16 bg-slate-500 p-8 rounded-lg flex flex-col w-96 h-96">
            <button className="ml-72 hover:opacity-50 mb-4">
                <ImCancelCircle size={20}/>
            </button>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <input id="input" type="text" className='rounded-md p-2 mb-4' placeholder='Please enter a task' onChange={(e) => setValue(e.target.value)} />
                <button type='submit' className="p-4">
                    <p className="p-2 bg-slate-900 hover:opacity-50 text-white rounded-md">Add Task</p>
                </button>
            </form>
        </div>
        
      </div>
    )
  }
  
  export default Dashboard
  