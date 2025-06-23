import React from 'react'

export const Header = () => {
  return (
    <header className='p-3 border-bottom '>
        <div className='container d-flex justify-content-between align-items-center border'>

          <img src='https://drive.google.com/file/d/1P7Wc3ecoFm2wYwjot93ybOLhR2wpujFT/view' alt='logo' />

          <div>
            <button type='button' className='btn btn-dark border'>LOGIN</button>
            <button type='button'className='btn btn-light border'>CARRITO</button>
          </div>
        </div>
    </header>
  )
}

