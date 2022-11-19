import { useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-3xl font-bold underline">Hello<FaBeer /></div>
  )
}

export default App
