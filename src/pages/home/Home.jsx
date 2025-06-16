import React from 'react'
import { Header } from '../../components/cabecera/Header';
import CardProduct from '../../components/card/CardProduct';
import { Footer } from '../../components/piesDePaginado/footer';

export const Home = () => {
    const handleAdd = () => {alert('Producto agregado al carrito')};
    const listaProduct = [{
    id:1,
    title:"Bahia Ring",
    image:"https://picsum.photos/200?random=1",
    priceOne:40990,
    priceTwo:35900,
  },{
    id:2,
    title:"Dareia Bracelet",
    image:"https://picsum.photos/200?random=2",
    priceOne:65990,
    priceTwo:60900,
  },
  {
    id:3,
    title:"Dolar Necklace",
    image:"https://picsum.photos/200?random=3",
    priceOne:59990,
    priceTwo:55900,
  },{
    id:4,
    title:"Necklace",
    image:"https://picsum.photos/200?random=4",
    priceOne:59990,
    priceTwo:55900,
  }
  
];
  return (
    <div className='container mt-4  text-center border'>
            <h4>Home</h4>
            <Header />
            <div className='row  row-cols-1 row-cols-lg-3  g-2 border justify-content-start'>
              
              {
                listaProduct.map(item => (
                <div className='col text-center p-2' key={item.id}>
                  <CardProduct image={item.image} title={item.title}  priceOne={item.priceOne} priceTwo={item.priceTwo} onAddToCart={handleAdd} buttonLabel="COMPRAR" />
                </div>
                
                ))
              }

            </div>
            <Footer />
          </div>    
    
  )
}
