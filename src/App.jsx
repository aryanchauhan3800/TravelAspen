import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Home/>
     
   <Navbar/>
    </>
  )
}

export default App
