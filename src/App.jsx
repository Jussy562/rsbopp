import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import '../src/components/table/table.css';
import './pages/home/home.css';
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-full app'>
        <Home />
      </div>
    </>
  )
}

export default App
