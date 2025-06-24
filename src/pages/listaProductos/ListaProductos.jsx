
import React from 'react'
import { Header } from '../../components/cabecera/Header'
import { ListaProduct } from '../../components/listaProductos/ListaProduct'
import { Banner } from '../../components/imagenbanner/Banner'
import { Navbar } from '../../components/cabecera/Navbar'
import { Footer } from '../../components/piesDePaginado/Footer'

export const ListaProductos = () => {
  return (
    <div className='container mt-4    text-center'>
      <h4>Lista Productos</h4>
      <Header />
      <Navbar />
      <Banner />
         <nav aria-label="Page navigation example ">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
      </nav>
      <div className='d-flex justify-content-between align-items-center '>
      
      <ul className="nav nav-tabs nav-underline flex-column justify-content-start">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" role='button' href="collares">COLLARES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" role='button' href="anillos">ANILLOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" role='button' href="brazaletes">BRAZALETES</a>
        </li>
      </ul>
      <div className='row justify-content-evenly'>
        <ListaProduct />
      </div>
      </div>
      <Footer />
    </div>
  )
}

 
