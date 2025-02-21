import { useState } from 'react'
import './App.css'
import "tailwindcss";
import TodoList from './components/TodoList';
import ListAddForm from './components/ListAddForm';


function App() {
  const [task, setTask] = useState({
    title: "",
    date: "",
    state: "",
    priority: "false",
  });

  const [taskList, setTaskList] = useState([]);


  const handleOnChange = (e) => {
    if (e.target.name === "priority") {
      setTask({ ...task, [e.target.name]: e.target.checked });
    } else {
      setTask({ ...task, [e.target.name]: e.target.value });
    }

  };

  const handleAdd = () => {
    if (task.title !== "" && task.date !== "") {
      // const sampleList = [...taskList];
      // sampleList.push(tasks);
      // setTaskList(sampleList);
      setTaskList([...taskList, task]);
      // clear the input after task added to the list
      setTask({
        title: "",
        date: "",
        status: false,
        priority: false,
      });
    }
  };

  const handleDelete = (id) => {
    const newList = taskList.filter((tasks, idx) => idx == id);
    setTaskList(newList);
  };

  const handleEdit = (tasks, id) => {
    const newTask = taskList.filter((_, idx) => idx === id);
    setTask(newTask[0]);


    //select the edit id from the list
    const newList = taskList.filter((_, idx) => idx == id);
    setTaskList(newList);

  }

  const handleState = (idex) => {
    const newList = taskList.map((item, index) => {
      if (index === id) {
        return {
          ...item, status: !item.status,
        };
      }
      return item;
    });
    setTaskList(newList);
  };

  return (
    <div className='App'>
      <div className='h-screen w-auto bg-blue-200 px-6'>
        <ListAddForm
          task={task}
          handleOnChange={handleOnChange}
          handleAdd={handleAdd}
        />
        <TodoList taskList={taskList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleState={handleState}
        />
      </div>
    </div>
  );
}

export default App
