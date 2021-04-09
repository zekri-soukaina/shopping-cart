import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardItem({
  category,
  image,
  title,
  description,
  price,
}) {
  return (
    <div style={{ margin: "10px" }}>
      <p>{category}</p>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <p>{price}</p>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
