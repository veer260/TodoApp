import { useState } from 'react'
import Customform from './components/Customform'

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-screen h-screen pt-32 bg-gradient-to-r from-yellow-100 to-green-100">
      <h1 className='text-4xl text-black-800 font-bold text-center '>My Task List</h1>
      <Customform />
    </div>
  )
}

export default App
