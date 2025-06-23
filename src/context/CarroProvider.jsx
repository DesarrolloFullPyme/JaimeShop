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
  },{
    id:5,
    title:"Necklace",
    image:"https://picsum.photos/200?random=5",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:6,
    title:"Necklace",
    image:"https://picsum.photos/200?random=6",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:7,
    title:"Necklace",
    image:"https://picsum.photos/200?random=7",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:8,
    title:"Necklace",
    image:"https://picsum.photos/200?random=8",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:9,
    title:"Necklace",
    image:"https://picsum.photos/200?random=9",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:10,
    title:"Necklace",
    image:"https://picsum.photos/200?random=10",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:11,
    title:"Necklace",
    image:"https://picsum.photos/200?random=11",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:12,
    title:"Necklace",
    image:"https://picsum.photos/200?random=12",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:13,
    title:"Necklace",
    image:"https://picsum.photos/200?random=13",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:14,
    title:"Necklace",
    image:"https://picsum.photos/200?random=14",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:15,
    title:"Necklace",
    image:"https://picsum.photos/200?random=15",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:16,
    title:"Necklace",
    image:"https://picsum.photos/200?random=16",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:17,
    title:"Necklace",
    image:"https://picsum.photos/200?random=17",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:18,
    title:"Necklace",
    image:"https://picsum.photos/200?random=18",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:19,
    title:"Necklace",
    image:"https://picsum.photos/200?random=19",
    description:'Cadena a de plata...',
    sizes: [5,6,7],
    priceOne:59990,
    priceTwo:55900,
  },{
    id:20,
    title:"Necklace",
    image:"https://picsum.photos/200?random=20",
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