import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Demoform from './Components/Demoform'
import Calculadora from './Components/Calculator'
import Nav from './Components/Nav'
import './App.css'

function App() {
  return (
    <>
      <Nav/>
      <Demoform/>
      <Calculadora/>
    </>
  )
}

export default App
