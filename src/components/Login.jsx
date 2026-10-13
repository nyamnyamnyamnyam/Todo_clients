import { InputGroup, Label, TextField, Button} from '@heroui/react'
import React, { useState } from 'react'

export const Login = ({setIsLoggedin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

const myUsername = 'Heg'
const myPassword = 1234

    const handleLogin = () =>{
        console.log(username, password)
        if(username==myUsername && myPassword == password) {
            setIsLoggedin(true)
            setMsg('')
        }
        else setMsg('Hibás a megadott bejelentkezési adat!')
        
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

