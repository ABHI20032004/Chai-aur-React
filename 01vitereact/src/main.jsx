import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp(){
  return (
    <>
      <h1>Custom App !</h1>
    </>
  )
}



//  const reactElement = {
//     type : 'a' ,
//     props : {
//          href : 'https://google.com' ,
//          target : '_blank'
//     } ,
//     Children : 'click me to visit google'
//  }



// const anotherelement = (
//   <a href='https://google.com' target='_blank'> Visit Google </a>
// )
// createRoot(document.getElementById('root')).render( 
//      anotherelement
// )


////////  TRue format for React JS
const anotheruser = 'Please check Me'
const reactElement = React.createElement(
       'a',  ///  tag
       {href : 'https://google.com' , target : '_blank'} ,   /// object
       'click Me to visit GOOGLE ' ,    
           anotheruser     /////   variable
)
createRoot(document.getElementById('root')).render( 
     reactElement
)




// createRoot(document.getElementById('root')).render( /// strict mode nahi likhne par bhi chal jata hai .  And MyApp / App  ko function ki tarah bhi execute kar sakte hai
//   <StrictMode>

//      <App />    

//   </StrictMode>,
// )


// createRoot(document.getElementById('root')).render( 
  
//      MyApp()

// )