import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import kartyak from './assets/components/kartyak'
import './App.css'
import { TANULOSZOBAK } from './adat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {kartyak}
    </>
  )
}

export default App
