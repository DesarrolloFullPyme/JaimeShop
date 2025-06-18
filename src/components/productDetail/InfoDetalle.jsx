import React from 'react'

export const InfoDetalle = ({title, price, description}) => {
  return (
    <div>
        <h1>Informacion Detalle</h1>

        <h2>{title}</h2>
        <h3 className='text-danger'>{price}</h3>
        <p>*Precio sin IVA, sin envío</p>
        <p>{description}</p>
    </div>
  )
}
