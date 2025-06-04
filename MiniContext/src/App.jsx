
import './App.css'
import UserContextPrivrider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {


  return (
    <>
    <UserContextPrivrider>
      <h1>Andar Jane ke liye login kare</h1>
      <Login />
      <Profile />
    </UserContextPrivrider>
    </>
  )
}

export default App
