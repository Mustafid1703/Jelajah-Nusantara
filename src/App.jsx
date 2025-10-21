import { useState } from 'react'
// import './App.css'

import Header from './components/Header/Header';
import Herosection from './components/Herosection/Herosection';
import Category from './components/Category/category';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Herosection />
      <Category />
    </>
  )
}

export default App
