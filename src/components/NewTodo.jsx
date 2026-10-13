import { useState } from 'react'
import { IoAddCircle } from 'react-icons/io5'

export const NewTodo = ({ handleAdd }) => {
  const [newTask, setNewTask] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedTask = newTask.trim()
    if (!trimmedTask) return

    handleAdd(trimmedTask)
    setNewTask('')
  }

  return (
    <form className="flex max-w-md m-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="new task..."
        value={newTask}
        className="border rounded p-3 m-auto flex-1"
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button type="submit" aria-label="Add task">
        <IoAddCircle style={{ fontSize: '3rem', color: '#800020', cursor: 'pointer' }} />
      </button>
    </form>
  )
}
