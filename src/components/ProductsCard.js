import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function ProductsCard({ product }) {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>
            {product.title} {product.price}
          </Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.category}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <button className="button"> Add to Cart</button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default ProductsCard;
