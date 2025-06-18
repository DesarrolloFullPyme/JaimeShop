import { useState } from 'react'
import Login from './components/login/Login'
import './App.css'
import {Home} from './pages/home/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { DetalleProducto } from './pages/detalleProducto/DetalleProducto'
import CarroProvider from './context/CarroProvider'

function App() {
  
  
  return (
    <CarroProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product/:id' element={<DetalleProducto />} />
      </Routes>
      </BrowserRouter>
    </CarroProvider>
    
  )
}

export default App;
