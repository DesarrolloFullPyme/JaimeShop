import React, { createContext } from 'react'

export const CarroContext = createContext();

export const CarroProvider = (props) => {
    const listaProductos =[{
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
    <CarroContext.Provider value={{listaProductos}} >
        {props.children}
    </CarroContext.Provider >
  )
}
export default CarroProvider;