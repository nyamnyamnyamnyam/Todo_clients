import { useState } from 'react'
import './App.css'
import { Login } from './components/Login'
import { MyTodos } from './components/MyTodos'



function App() {
  const [isLoggedin, setIsLoggedin] = useState(true)
  return (
    <div className="bg-indigo-950 text-indigo-50 min-h-screen">
      <h1 className='flex items-center flex-col p-3 font-bold text-3xl'>My Todos</h1>

     {isLoggedin ?  <MyTodos setIsLoggedin={setIsLoggedin}/> : <Login setIsLoggedin = {setIsLoggedin}/>}

    </div>
  )
}

export default App
