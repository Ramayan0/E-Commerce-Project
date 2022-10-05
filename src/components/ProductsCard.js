import React from "react";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
import "./Card.css";

function ProductsCard({ product }) {
  return (
    <div className="col" id="allCard">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={product.image} alt="" className="image" />
        <div className="card-body"></div>
        <div className="card__info">
          <h2>Title:{product.title}</h2>
          <h4>Price:{product.price}</h4>
          <h4>Description:{product.description}</h4>
          <h4>Catgory:{product.category}</h4>
          <div>
            <button id="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
