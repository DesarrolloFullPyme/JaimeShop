import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Header } from '../../components/cabecera/Header';
import { Galeria } from '../../components/productDetail/Galeria';
import { InfoDetalle } from '../../components/productDetail/InfoDetalle';
import {SelectorTallas} from '../../components/productDetail/SelectorTallas';
import { SelectorContador } from '../../components/productDetail/SelectorContador';
import { CarroContext } from '../../context/CarroProvider';
import { Footer } from '../../components/piesDePaginado/footer';
import { Navbar } from '../../components/cabecera/Navbar';


export const DetalleProducto = () => {
  const {listaProductos }= useContext(CarroContext);
  
  const {id} =useParams();
  const product = listaProductos.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if(!product)
    return <p className='text-center'>Producto no encontrado</p>
  
  return (
    <>
    <Header />
    <Navbar />
    <div className='container mt-4  p-3'>
      <div className='row'>
        <div className='col-md-6'>
          <Galeria foto={product.image}/>
        </div>
        <div className='col-md-6'>
          <InfoDetalle  title={product.title} price={product.priceOne} description={product.descripcion}/>

          <SelectorTallas sizes={product.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>

          <SelectorContador quantity={quantity} setQuantity={setQuantity}/>
        </div>
        <div className='mt-3  p-3 text-center justify-content-end d-flex'>
          <button className='btn btn-secondary me-2'>AGREGAR AL CARRITO</button>
          <button className='btn btn-primary'>COMPRAR AHORA</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
