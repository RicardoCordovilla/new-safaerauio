import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Safaera from './pages/Safaera'
import Discoteca from './pages/Discoteca'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// import Confirmacion from './pages/conformacion.html'

// const Animated = () => {
//   const location = useLocation()

//   const RedirectConfirmacion = () => {
//     window.location.href = '/confirm.html'
//     return <></>
//   }

//   return (
//     // <AnimatePresence>
//     <Routes >
//       <Route path='/' element={<Home />} />
//       <Route path='/confirmacion' element={<RedirectConfirmacion />} />
//       <Route path='/safaera' element={<Safaera />} />
//       <Route path='/discoteca' element={<Discoteca />} />
//     </Routes>
//     // </AnimatePresence>
//   )

// }


function App() {

  const RedirectConfirmacion = () => {
    window.location.href = '/confirm.html'
    return <></>
  }

  return (
    // <div className='App'>
    <HashRouter>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/safaera' element={<Safaera />} />
        <Route path='/discoteca' element={<Discoteca />} />
        <Route path='/confirmacion' element={<RedirectConfirmacion />} />
      </Routes>
    </HashRouter>

    // </div>
  )
}

export default App
