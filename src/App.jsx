import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Safaera from './pages/Safaera'
import Discoteca from './pages/Discoteca'

function App() {

  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/safaera' element={<Safaera />} />
          <Route path='/discoteca' element={<Discoteca />} />
          {/* <Route path='/confirmacion' element={<Confirmacion />} /> */}
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App
