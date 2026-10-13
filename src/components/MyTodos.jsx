import { Button } from '@heroui/react'
import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { MdOutlineCloudDone } from 'react-icons/md'
import { todosData } from '../data'
import { NewTodo } from './NewTodo'
import { IoLogOutOutline } from 'react-icons/io5'

export const MyTodos = ({setIsLoggedin}) => {
  const [data, setData] = useState(todosData)
  const remaining = data.filter(({ done }) => !done).length

  console.log('A backend elérésde:', import.meta.env.VITE_API_URL)

  const handleDelete = (id) => {
    setData((prev) => prev.filter((obj) => obj.id !== id))
  }

  const handleDone = (id) => {
    setData((prev) => prev.map((obj) => (obj.id === id ? { ...obj, done: !obj.done } : obj)))
  }

  const handleAdd = (descr) => {
    const newTodo = {
      id: Date.now(),
      descr,
      done: false,
    }
    setData((prev) => [...prev, newTodo])
  }

  return (
    <div className='max-w-3xl m-auto'>
      <h2 className="flex items-center flex-col p-3 max-w-3xl m-auto font-bold text-3xl"></h2>
      <NewTodo handleAdd={handleAdd} />
      <ul className="flex flex-col gap-3 shadow-md max-w-3xl m-auto">
        {data.map(({ id, descr, done }) => (
          <li key={id} className="flex justify-between p-5 border-b-2">
            <Button
              isIconOnly
              aria-label={done ? 'Mark task as not done' : 'Mark task as done'}
              variant="tertiary"
              onClick={() => handleDone(id)}
            >
              <MdOutlineCloudDone style={{ color: done ? 'green' : 'gray' }} className="font-bold text-2xl" />
            </Button>

            <div style={{ textDecoration: done ? 'line-through' : 'none' }}>{descr}</div>

            <Button isIconOnly aria-label="Delete task" variant="danger" onClick={() => handleDelete(id)}>
              <FaTrash />
            </Button>
          </li>
        ))}
      </ul>
      <div className="max-w-3xl m-auto p-4 text-center">
        {remaining === 0
          ? 'Sikeresen elvégezted a feladataidat.'
          : `Nem elvégzett feladataid száma: ${remaining}`}
      </div>


      <Button onClick={() => setIsLoggedin(false)} className={"fixed top-2 right-2 bg-indigo-50 text-indigo-950"}>
        <IoLogOutOutline size = "2em"/> Kijelenkezés
      </Button>

      

    </div>
  )
}

export default MyTodos
