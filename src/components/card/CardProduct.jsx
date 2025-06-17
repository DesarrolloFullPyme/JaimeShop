import React from "react";
import { Link } from "react-router-dom";


function CardProduct(props) {
  return (
    <div className="card text-center border">
      <Link to={`/product/${props.id}`} className="text-decoration-none text-dark">
        <img src={props.image} alt={props.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Precio: ${props.priceOne}</p>
        </div>
      </Link>
      <button className="btn btn-secondary m-2" onClick={props.onAddToCart}>{props.buttonLabel || "Agregar al carrito"}</button>
    </div>
  
  )
}

export default CardProduct;


