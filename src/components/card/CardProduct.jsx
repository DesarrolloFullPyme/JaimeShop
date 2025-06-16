import React from "react";

function CardProduct(props) {
  return (

   <div className="container text-center">
    <div className="row justify-content-md-center">
       <div className=" card text-center mb-3 Border" style={{width: '18rem'}}>
      <img className="card-img-top " src={props.image} alt={props.title}/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Precio: ${props.PriceOne}</p>
        {props.showPriceTwo && ( <p>Precio subcriptor: ${props.priceTwo}</p> )}

        <button className="btn btn-outline-secondary" type="submit" onClick={props.onAddToCart}
        >{props.buttonLabel || 'Agregar al carrito'}</button>
      </div>
    </div>
    </div>
   </div>
  )
}

export default CardProduct;
