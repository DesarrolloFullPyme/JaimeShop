import React from 'react'

export const Navbar = () => {
  return (
    <div className='container '>
      <nav className='nav justify-content-between mt-3 bg-light py-2 '>
            <a className='nav-link' href="home">HOME</a>
            <a className='nav-link' href="productoslistado">PRODUCTOS</a>
            <a className='nav-link' href="nosotros">NOSOTROS</a>
            <a className='nav-link' href="#"></a>

           <div className='input-group w-50  '>
            <input className='form-control me-2' type="search" placeholder="Buscar Producto..." aria-label="Search"/>
            <button className='btn btn-outline-success' type="submit">BUSCAR</button>
          </div>
        </nav>
    </div>
  )
}

