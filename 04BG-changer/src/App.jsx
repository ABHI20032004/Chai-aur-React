import { useState } from 'react'

function App() {
  const [color, setcolor] = useState('black')

  return (
          <div className="w-full  h-screen  duration-200"
       style = {{backgroundColor : color}}
      >
        <div className='fixed flex flex-wrap
        justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap bg-white justify-center gap-3 px-3 py-2 rounded-xl'> 
               <button onClick={() => setcolor('red')} className='outline-none px-4 py-1 rounded-xl bg-red-500' >RED</button> 
               <button onClick={() => setcolor('orange')} className='outline-none px-4 py-1 rounded-xl bg-orange-500' >ORANGE</button> 
               <button onClick={() => setcolor('purple')} className='outline-none px-4 py-1 rounded-xl bg-purple-500' >PURPLE</button> 
               <button onClick={() => setcolor('pink')} className='outline-none px-4 py-1 rounded-xl bg-pink-500' >PINK</button> 
               <button onClick={() => setcolor('yellow')} className='outline-none px-4 py-1 rounded-xl bg-yellow-500' >YELLOW</button> 
               <button onClick={() => setcolor('green')} className='outline-none px-4 py-1 rounded-xl bg-green-500' >GREEN</button>   
            </div>    
        </div>
      </div>
  )
}

export default App
