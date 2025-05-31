import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/cards.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
<>
      <h1 className="bg-cyan-400 text-black p-5 rounded-b-full">Tailwind Test</h1>
       <br/>
        <Card  username = "ABHISHEK"/ >
         <br/>
        <Card  username = "GOLU"/>
    </>
  )
}

export default App
