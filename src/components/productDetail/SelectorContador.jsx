import React from 'react'

export const SelectorContador = ({quantity, setQuantity}) => {
  return (
    <div className='d-flex align-items-center mb-3'>
        <h1>Selector Contador</h1>
        <label className='me-2' htmlFor="">CANTIDAD: </label>
        <button className='btn btn-outline-secondary btn-sm' onClick={() => setQuantity(Math.max(1,quantity -1))}> - </button> 
        <span className='mx-2'>{quantity}</span>
        <button className='btn btn-outline-secondary btn-sm' onClick={() => setQuantity(quantity +1)}> + </button>
    </div>
  )
}
