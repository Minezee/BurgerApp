import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Order from './pages/Order'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  )
}

export default App
