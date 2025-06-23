import React from 'react'
import { Logo } from '../../components/logoImagenes/Logo'

export const Header = () => {
  return (
    <header className='p-3 border-bottom '>
        <div className='container d-flex justify-content-between align-items-center border'>

          <Logo />

          <div>
            <button type='button' className='btn btn-dark border'>LOGIN</button>
            <button type='button'className='btn btn-light border'>CARRITO</button>
          </div>
        </div>
    </header>
  )
}

