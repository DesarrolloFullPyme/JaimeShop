import React from 'react'
import {CardProduct} from '../../components/card/CardProduct'

export const ListaProduct = () => {

  const handleAdd =()=>{alert("Producto agregado al carrito")}

  const ListaProduct =[{
    id:1,
    title:"Bahia Ring",
    image:"https://picsum.photos/200?random=1",
    description:'Anillo a de plata...',
    sizes: [5,6,7],
    priceOne:40990,
    priceTwo:35900,
  },{
    id:2,
    title:"Dareia Bracelet",
    image:"https://picsum.photos/200?random=2",
    description:'Brasalete a de plata...',
    sizes: [5,6,7],
    priceOne:65990,
    priceTwo:60900,
  },
  {
    id:3,
    title:"Dolar Necklace",
    image:"https://picsum.photos/200?random=3",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:4,
    title:"Necklace",
    image:"https://picsum.photos/200?random=4",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  }
  
  ];
  
  return (
    <div className='row  row-cols-1 row-cols-lg-3  g-2 border justify-content-start'>
      {ListaProduct.map((item) => (
        <div className='col text-center p-2' key={item.id}>
          <CardProduct 
            id={item.id} 
            title={item.title}
            image={item.image} 
            description={item.description} 
            sizes={item.sizes}
            priceOne={item.priceOne}
            priceTwo={item.priceTwo}
            onAddToCart={handleAdd}
            buttonLabel="COMPRAR"
             />
      </div>
      ))}
      
    </div>
  )
}