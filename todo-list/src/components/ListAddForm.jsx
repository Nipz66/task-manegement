import React from 'react'

function ListAddForm({ handleOnChange, task, handleAdd }) {
    return (
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
    )
}

export default ListAddForm