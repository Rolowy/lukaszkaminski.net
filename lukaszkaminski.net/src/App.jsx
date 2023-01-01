import React from 'react'
import './App.css'
import tw from "tailwind-styled-components"

import Home from './pages/home/index';
import Navigation from './components/navigation/index.jsx'

function App() {
  return (
    <>
      <Navigation />
      <Home/>
    </>
  )
}

export default App
