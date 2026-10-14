import { InputGroup, Label, TextField, Button} from '@heroui/react'
import React, { useState } from 'react'
import { login } from '../api'


export const Login = ({setIsLoggedin}) => {
    const [username, setUsername] = useState('heg')
    const [password, setPassword] = useState('1234')
    const [msg, setMsg] = useState('')



    const handleLogin = async() =>{
      try {
        const data = await login(username, password)
        setMsg(data.msg)
        if(data.success){
          setIsLoggedin(data.success)
        }
      } catch (error) {
        console.log(error)
        setMsg(error.response?.data?.msg || 'Nem sikerült kapcsolódni a szerverhez!')
      }
        
    }
    

  return (
      <div className='max-w-md m-auto p-4 bg-indigo-400 rounded-2xl'>
      <TextField fullWidth name="email">
        <Label>Felhasználónév</Label>
        <InputGroup fullWidth>  
          <InputGroup.Input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </InputGroup>
      </TextField>
      <TextField fullWidth name="password">
        <Label>Jelszó</Label>
        <InputGroup fullWidth>
          <InputGroup.Input placeholder="Enter password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </InputGroup>
      </TextField>
      <Button className="m-4 bg-indigo-950" onClick={() => handleLogin()}>Belépés</Button>
      <div className='text-red-600 font-bold'>{msg}</div>
    </div>
    
)
}
