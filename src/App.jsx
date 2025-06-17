import { useState } from 'react'
import Login from './components/login/Login'
import './App.css'
import {Home} from './pages/home/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { DetalleProducto } from './pages/detalleProducto/DetalleProducto'

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product/:id' element={<DetalleProducto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
