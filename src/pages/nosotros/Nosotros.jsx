import React from 'react'
import { Header } from '../../components/cabecera/Header'
import { Navbar } from '../../components/cabecera/Navbar'
import { Banner } from '../../components/imagenbanner/Banner'
import { Footer } from '../../components/piesDePaginado/Footer'

export const Nosotros = () => {
  return (
    <div className='container mt-4   text-center'>
        <h3>Nosotros</h3>
        <Header />
        <Navbar />
        <Banner />
      <div className='card mb-3  ' style={{maxWidth: 'auto'}}>
        <div className='row row-cols-1 g-2 justify-content-start'>
          <div className='col-md-4'>
            <img src='https://picsum.photos/200?random=2' className='img-fluid roundetd-star' alt=''/>
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>CONOCENOS</h5>
              <p className='card-text'>This is a wider card with supporting
                     text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className='card-text'><small className='text-body-secondary'>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />     
    </div>
  )
}
