import React from 'react'
import { Header } from '../../components/cabecera/Header';
import { Footer } from '../../components/piesDePaginado/footer';
import { ListaProduct } from '../../components/listaProductos/ListaProduct';
import { Banner } from '../../components/imagenbanner/Banner';

export const Home = () => {

  return (
    <div className='container mt-4  text-center'>
            <h4>Home</h4>
            <Header />
            <Banner />
            <ListaProduct/>
            <Footer />
          </div>    
    
  )
}
