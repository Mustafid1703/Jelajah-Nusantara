import { useState } from 'react'
// import './App.css'

import Header from './components/Header/Header'
import Herosection from './components/Herosection/Herosection'
import Navigasi from './components/Navigasi/Navigasi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Herosection />
      <Navigasi />
    </>
  )
}

export default App
