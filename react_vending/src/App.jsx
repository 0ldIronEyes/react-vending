import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import VendingMachine from './VendingMachine'
import VendingItem from './VendingItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/food/:name" element = {<VendingItem/>} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
