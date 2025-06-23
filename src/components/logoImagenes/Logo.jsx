import React from 'react'
import ImagenLogo from '../../components/logoImagenes/Logo J Lúmina-03.png'

export const Logo
 = () => {
  return (
    <div>
        <img src={ImagenLogo} alt='logo' className='img-fluid' style={{ width: '200px', height: '100px' }} />
    </div>
  )
}
