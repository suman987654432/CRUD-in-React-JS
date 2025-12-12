import React, { useState } from 'react'
const App = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState({
    title: "",
    description: "",
    priority: "Low",
  })
  const [editIndex, setEditIndex] = useState(null)
  // handle input 
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }))
  }
  // for add task 
  const addtask = () => {
    setTasks([...tasks, { title: input.title, description: input.description, priority: input.priority }]);
    setInput({ title: "", description: "", priority: "Low" })
  }

  // for delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i != index))
  }
  // Edit button click
  const editTask = (index) => {
    setInput(tasks[index])
    setEditIndex(index)
  }

  // Update task
  const updateTask = () => {
    const updatedTasks = tasks.map((task, i) =>
      i === editIndex ? { ...input } : task
    )
    setTasks(updatedTasks)
    setInput({ title: "", description: "", priority: "Low" })
    setEditIndex(null)
  }
  return (

    <div className='flex justify-center flex-col items-center mt-10'>
      <h1 className='text-center font-bold text-2xl mt-5'>Task Manager</h1>
      <label htmlFor="title">Enter title </label>
      <input type="text" id="title" name='title' value={input.title} onChange={handleInput} className='border border-gray-900 ' /> <br />
      <label htmlFor="description">Enter Description </label>
      <input type="text" id="description" name='description' value={input.description} onChange={handleInput} className='border border-gray-900 ' /> <br />
      <label className="text-gray-700 font-medium"> Select Priority</label>
      <select
        name="priority"
        className=""
        value={input.priority}
        onChange={handleInput}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      {editIndex === null ? (
        <button className=' ml-2 p-2 bg-blue-600 text-white' onClick={addtask}>add task </button>
      ) : (
        <button className=' ml-2 p-2 bg-green-600 text-white' onClick={updateTask}>Update</button>
      )}
      {/* show output   */}

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task.title}: {task.description} : {task.priority}
            <button
              onClick={() => deleteTask(i)}
            >Delete</button>

            <button
              onClick={() => editTask(i)}
            >Edit</button>
          </li>
        ))}
      </ul>


    </div>


  )
}

export default App
