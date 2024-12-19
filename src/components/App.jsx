import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  const [My_DIYs, setMy_DIYs] = useState([])
  console.log(My_DIYs)
  
  useEffect(() => {
    fetch('http://localhost:3000/My_DIYs')
    .then(response => response.json())
    .then(My_DIYsData => setMy_DIYs(My_DIYsData))
  }, [])

  return (
    <>
      <NavBar/>
      <h1 class = "welcomeText" >Welcome to My_DIYs!</h1>
      <Outlet/>
    </>
  )
}

export default App