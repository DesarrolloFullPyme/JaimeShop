import React, { useContext } from 'react'
import {CardProduct} from '../card/CardProduct'
import { CarroContext } from '../../context/CarroProvider'

export const ListaProduct = () => {

  const handleAdd =()=>{alert("Producto agregado al carrito")}
  const {listaProductos }= useContext(CarroContext);
  
  
  return (
    <div className='row  row-cols-1 row-cols-lg-3  g-2  justify-content-start'>
      {listaProductos.map((item) => (
        <div className='col text-center p-2' key={item.id}>
          <CardProduct 
            id={item.id} 
            title={item.title}
            image={item.image} 
            description={item.description} 
            sizes={item.sizes}
            priceOne={item.priceOne}
            priceTwo={item.priceTwo}
            onAddToCart={handleAdd}
            buttonLabel="COMPRAR"
             />
      </div>
      ))}
      
    </div>
  )
}