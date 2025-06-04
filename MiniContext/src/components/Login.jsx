import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2>login</h2>
        <input type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)} 
        placeholder='username' />
        <br/>
        <input type="password"
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        placeholder='password'/>
        <br/>
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
export default Login
