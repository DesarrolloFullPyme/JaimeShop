import React from 'react'
import { Header } from '../../components/cabecera/Header';
import { Footer } from '../../components/piesDePaginado/footer';
import { ListaProduct } from '../../components/listaProductos/ListaProduct';

export const Home = () => {

  return (
    <div className='container mt-4  text-center border'>
            <h4>Home</h4>
            <Header />
            <ListaProduct/>
            <Footer />
          </div>    
    
  )
}
