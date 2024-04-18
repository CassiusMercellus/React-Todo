import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Dashboard />
    </>
  )
}

export default App
