
import React from 'react'
import { Header } from '../../components/cabecera/Header'
import { ListaProduct } from '../../components/listaProductos/ListaProduct'
import { Footer } from '../../components/piesDePaginado/footer'
import { Banner } from '../../components/imagenbanner/Banner'

export const ListaProductos = () => {
  return (
    <div className='container mt-4   border text-center'>
      <h4>Lista Productos</h4>
      <Header />
      <Banner />
         <nav aria-label="Page navigation example border">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
      </nav>
      <div className='d-flex justify-content-between align-items-center border'>
      
      <ul class="nav nav-tabs nav-underline flex-column justify-content-start">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" role='button' href="#">Producto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" role='button' href="#">Categoria</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" role='button' href="#">Filtro</a>
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

 
