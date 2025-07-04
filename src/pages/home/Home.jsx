import React from 'react'
import { Header } from '../../components/cabecera/Header';
import { ListaProduct } from '../../components/listaProductos/ListaProduct';
import { Banner } from '../../components/imagenbanner/Banner';
import { Navbar } from '../../components/cabecera/Navbar';
import { Footer } from '../../components/piesDePaginado/Footer';

export const Home = () => {

  return (
    <div className='container mt-4  text-center'>
            <h4>Home</h4>
            <Header />
            <Navbar />
            <Banner />
            <ListaProduct/>
            <Footer />
          </div>   
  )
}
