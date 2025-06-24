import React from 'react'

export const InfoDetalle = ({title, price, description}) => {
  return (
    <div className='text-center  p-3'>
        <h2>{title}</h2>
        <h3 className='text-danger'>{price}</h3>
        <p>*Precio sin IVA, sin envío</p>
        <p>{description}</p>
    </div>
  )
}
