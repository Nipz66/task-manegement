import { useState } from 'react'
import './App.css'
import "tailwindcss";


function App() {
  const [task, setTask] = useState({
    title: "",
    date: "",
    state: "",
    priority: "",
  });

  console.log(task);

  const handleOnChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div className='App'>
      <div className='h-screen w-auto bg-blue-200'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <label>Task</label>
            <input
              name="title"
              onChange={(e) => handleOnChange(e)}
              value={task.title}
              placeholder='task'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
