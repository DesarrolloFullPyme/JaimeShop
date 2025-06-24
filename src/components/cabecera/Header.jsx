import React from 'react'
import { Logo } from '../../components/logoImagenes/Logo'

export const Header = () => {
  return (
    <header className='p-3 -bottom '>
        <div className='container d-flex justify-content-between align-items-center '>
          <Logo />
          <div>
            <button type='button' className='btn btn-dark ' >LOGIN</button>
            <button type='button'className='btn btn-light '>CARRITO</button>
          </div>
        </div>
    </header>
  )
}

