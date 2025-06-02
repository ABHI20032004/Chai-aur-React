import { useState , useCallback , useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8) 
  const [numberAllowed , setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [Password , setPassword] =useState("")

  ///  useRef hook
  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = (Math.floor(Math.random() * str.length +1))
      
      pass += str.charAt(char)
    }

      setPassword(pass)
    
  } , [length , numberAllowed ,characterAllowed ,setPassword])

  useEffect(()=> {
    PasswordGenerator()
  } , [length , numberAllowed , characterAllowed ,setPassword])


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(Password)
  } ,[Password])

  useEffect(()=>{
    PasswordGenerator()
  } , [length , numberAllowed , characterAllowed ,PasswordGenerator])

  return (
    
      <div className=' w-[800px] h-[270px]  mx-auto rounded-2xl px-4 my-8 bg-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-purple-300 text-center'>Password Generator</h1>
         <br/><br/>
        <div className='h-[60px] text-3xl flex shadow rounded-lg overflow-hidden mb-4 bg-blue-300 text-purple-500'>
          <input 
          type="text" 
          value={Password} 
          className='outline-none w-full py-1 px-3' 
          placeholder='password : ' 
          readOnly 
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
          className=' outline-none flex items-center px-4 text-xl text-purple-500 rounded-md shrink-0 hover:bg-purple-600'>copy</button>
        </div>
        <br/>
        <div className='flex items-center text-sm gap-x-19 px-17'>
          <div className='flex items-center gap-x-1' >
            <input 
            type="range"
            min ={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}} />
            <label className='text-purple-500 text-2xl'>length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
             <input 
             type="checkbox"
             defaultChecked = {numberAllowed}
             id='numberInput'
             onChange={()=>{setnumberAllowed((prev)=> !prev)}}
              />
              <label htmlFor="input number" className='text-purple-500 text-2xl'> number </label>
          </div>

          <div className='flex items-center gap-x-1'>
             <input 
             type="checkbox"
             defaultChecked = {characterAllowed}
             id='characterInput'
             onChange={()=>{setcharacterAllowed((prev)=> !prev)}}
              />
              <label htmlFor="input character" className='text-purple-500 text-2xl'> character </label>
          </div>
        </div>
      </div>
    
  )
}

export default App
