import React from 'react'

function TodoList({
        taskList,
        handleDelete,
        handleEdit,
        handleState,
}) {
    return (
        <div className="mt-4 flex flex-col gap-2 rounded text-2xl">
            {taskList.map((tasks, idx) => (
                <div key={idx} className='w-full flex gap-2 py-4 items-center bg-amber-200 rounded '>
                    <div className='w-[300px]'>{tasks.title}</div>
                    <div className='w-[300px]'>{tasks.date}</div>
                    <div className=' w-[80px]'>{tasks.priority ? "✔" : " 🚫"}</div>
                    <input className='w-[50px]' type="checkbox"
                        onChange={() => handleState(idx)}
                    />
                    <button className='text-blue-600 font-bold' onClick={() => handleEdit(tasks, idx)}>Edit</button>
                    <button className='text-red-600 font-bold' onClick={() => handleDelete(idx)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList