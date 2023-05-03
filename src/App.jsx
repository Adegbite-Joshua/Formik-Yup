import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormikSignup from './Components/FormikSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <FormikSignup/>
    </>
  )
}

export default App
