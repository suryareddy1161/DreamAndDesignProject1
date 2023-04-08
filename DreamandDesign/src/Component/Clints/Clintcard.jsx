import React from "react";
import './Clints.css'

export default function Product(props) {
  return (
    <div className="card" >
      <img className="product--image" src={props.url} alt="product image" />
    </div>
  );
}