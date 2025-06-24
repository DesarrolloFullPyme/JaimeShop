import { useState } from 'react'
import Login from './components/login/Login'
import './App.css'
import {Home} from './pages/home/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { DetalleProducto } from './pages/detalleProducto/DetalleProducto'
import CarroProvider from './context/CarroProvider'
import { ListaProductos} from './pages/listaProductos/ListaProductos'
import { Nosotros } from './pages/nosotros/Nosotros'

function App() {
  
  
  return (
    <CarroProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product/:id' element={<DetalleProducto />} />
        <Route path='/product/home' element={<Home />} />
        <Route path='/product/productosListado' element={<ListaProductos />} />
        <Route path='/product/nosotros' element={<Nosotros />} />
        <Route path="/home" element={<Home />} />
        <Route path='/productoslistado' element={<ListaProductos/>} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </CarroProvider>
    
  )
}

export default App;
