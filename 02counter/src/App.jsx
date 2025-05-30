import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /////   not working on UI
  // let counter  = 15

  // const AddValue = () => {
  //   counter = counter + 1
  //    console.log("Value Added" , counter);
  // }

  let [counter , setcounter] = useState(15)    //  it introduce a counter variable  //   jaha jaha counter hoga sabhi jagah value changed hoga
  const AddValue = () => {
    setcounter(counter + 1)
    console.log('Value Changed' , counter + 1);
  }

  const RemoveValue = () => {
    if(counter - 1 < 0)  setcounter(0)   //   for prevent negative integer
    else
    setcounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button  onClick={AddValue} > Add Value </button>
      <br />
      <button onClick={RemoveValue}>Remove Value</button>
      <h2>Value Changed to {counter}</h2>
    </>
  )
}

export default App
