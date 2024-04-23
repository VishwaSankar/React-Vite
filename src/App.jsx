import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Album from './album'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    
      <div>
        <Album/>
       
      </div>
     
    </>
  )
}

export default App
