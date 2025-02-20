import { useState } from 'react'
import './App.css'
import "tailwindcss";


function App() {
  const [task, setTask] = useState({
    title: "",
    date: "",
    state: "",
    priority: "false",
  });

  const [taskList, setTaskList] = useState([]);

  console.log(task);

  const handleOnChange = (e) => {
    if (e.target.name == "priority") {
      setTask({ ...task, [e.target.name]: e.target.checked });
    } else {
      setTask({ ...task, [e.target.name]: e.target.value });
    }

  };

  const handleAdd = () => {
    // const sampleList = [...taskList];
    // sampleList.push(task);
    // setTaskList(sampleList); // this method is use js this tow option are same output

    setTaskList([...taskList, task]);  // React is use best
  };


  return (
    <div className='App'>
      <div className='h-screen w-auto bg-blue-200 px-6'>
        <div className='flex items-center gap-8'>
          <div className='flex flex-col'>
            <label>Task</label>
            <input
              name="title"
              type='text'
              onChange={(e) => handleOnChange(e)}
              value={task.title}
              placeholder='task'
            />
          </div>
          <div className='flex flex-col'>
            <label>Date</label>
            <input
              name="date"
              type='date'
              onChange={(e) => handleOnChange(e)}
              value={task.date}
              placeholder='12/12/2021'
            />
          </div>
          <div className='flex flex-col'>
            <label>Priority</label>
            <input
              name="priority"
              type='checkbox'
              onChange={(e) => handleOnChange(e)}
              checked={task.priority}
            />
          </div>
          <div>
            <button className='bg-blue-600 px-4 py-2 min-w-[6rem] rounded-2xl' onClick={() => handleAdd()}>Add</button>
          </div>
        </div>
        <div className="mt-4">
          {taskList.map((tasks, idx) => (
            <div key={idx}>
              <div>{tasks.title}</div>
              <div>{tasks.date}</div>
              <div>{tasks.priority}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
