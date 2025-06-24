import React from 'react'

export const SelectorTallas = ({sizes, selectedSize, setSelectedSize}) => {
  return (
    <div className='mb-3  p-3'>
        <p>Tallas Disponibles: </p>
        {sizes.map(size => (
            <button key={size} className={`btn btn-sm me-2 mb-2 ${selectedSize === size ? 'btn-dark':'btn-outine-dark'}`} 
            onClick={() => setSelectedSize(size)}>{size}</button>))}
    </div>
  )
}
