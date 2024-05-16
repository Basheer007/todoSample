import React, { useState } from 'react'

const Todolist = () => {

  // normal task
  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState('')


  const [taskboolen, setTaskBoolean] = useState(false)
  const [edittask, setEditTask] = useState('')
  function addTask() {
    if (newTask.trim() !== '') {
      setTask((prev) => {
        setNewTask('')
        return [...prev, newTask]
      })
    }
  }
  function handleNewTask(e) {
    setNewTask(e.target.value)
  }

  function handleEdit(index) {
    setTaskBoolean(true)
    setEditTask(task[index])
    const newEditTask = task.filter((el, i) => i !== index)
    setTask(newEditTask)
  }
  function editedTask(e) {
    setEditTask(e.target.value)
  }
  function AddEdited() {
    setTaskBoolean(false)
    if (edittask.trim() !== '') {
      setTask((prev) => {
        setEditTask('')
        return [...prev, edittask]
      })
    }
  }

  function handleDelete(index) {
    const result = confirm("Are you sure You want delete this item?")

    if (result) {
      const newEditTask = task.filter((el, i) => i !== index)
      setTask(newEditTask)
    }
  }
  return (
    <section className='bg-black  min-h-screen '>
      <div className='text-center pt-4'>
        <h1 className='text-2xl text-white font-Lucky'>Todo List</h1>

        <div className='flex justify-center my-4'>
          <input type="text" value={newTask} onChange={(e) => handleNewTask(e)} className='px-4 font-nunito ' />
          <div>
            <button
              onClick={addTask}
              className='text-white bg-green-500 px-2 py-1 rounded-r-xl'>
              Add
            </button>
          </div>
        </div>
      </div>

      <ul className='bg-slate-700 flex container mx-auto flex-col relative gap-2 '>
        {task.map((item, index) => (
          <li key={index} className='text-white border flex  border-white'>

            <span className='text-xl flex-1 px-1 font-outfit'>{item}</span>
            <div onClick={() => handleEdit(index)} className='flex items-center'>
              <button className='bg-emerald-700 px-2 py-1 font-outfit'>Edit</button>
            </div>
            <div className='flex items-center' onClick={() => handleDelete(index)}>
              <button className='bg-red-700 px-2 py-1 font-outfit'>Delete</button>
            </div>
          </li>
        ))}

        <div className={`${taskboolen ? 'flex' : 'hidden'} bg-transparent backdrop-blur-sm h-full  flex-col items-center justify-center fixed w-full inset-0`}>
          <h1 className='text-white font-outfit text-xl capitalize'>Edit task here</h1>

          <div className='mt-4 flex justify-center w-full'>
            <input type="text" value={edittask} onChange={(e) => editedTask(e)} />
            <div>
              <button
                onClick={AddEdited}
                className='text-white bg-green-500 px-2 py-1 rounded-r-xl'>
                Add
              </button>
            </div>
          </div>
        </div>
      </ul>
    </section>
  )
}

export default Todolist
