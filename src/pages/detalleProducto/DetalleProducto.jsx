import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Header } from '../../components/cabecera/Header';
import { Galeria } from '../../components/productDetail/Galeria';
import { InfoDetalle } from '../../components/productDetail/InfoDetalle';
import {SelectorTallas} from '../../components/productDetail/SelectorTallas';
import { SelectorContador } from '../../components/productDetail/SelectorContador';



export const DetalleProducto = () => {

  const {id} =useParams();
  const product = listaProduct.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if(!product)
    return <p className='text-center'>Producto no encontrado</p>
  
  return (
    <>
    <Header />
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-6'>
          <Galeria image={product.image}/>
        </div>
        <div className='col-md-6'>
          <InfoDetalle  title={product.title} price={product.priceOne} description={product.descripcion}/>

          <SelectorTallas sizes={product.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>

          <SelectorContador quantity={quantity} setQuantity={setQuantity}/>
        </div>
        <div className='mt-3'>
          <button className='btn btn-secondary me-2'>AGREGAR AL CARRITO</button>
          <button className='btn btn-primary'>COMPRAR AHORA</button>
        </div>
      </div>
    </div>
    </>
  )
}
