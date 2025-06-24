import React from 'react'

export const Galeria = ({foto}) => {
  return (
    <div className=' p-3 mb-3'>
        <div className='mb-3'>

            <img src={foto} alt="Producto" className='img-fluid rounded' />
        </div>
        <div className='d-none d-md-block'>
            {[1,2,3,4].map(i =>(
                <img key={i} src={`https://picsum.photos/50?ramdon/${i}`} className='img-thumbnail me-2' alt={`mini ${i}`}/>
            ))}
        </div>
    </div>
  )
}
