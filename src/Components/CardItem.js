import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardItem.css";

export default function CardItem({
  id,
  image,
  title,
  description,
  price,
  addToCart,
}) {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          borderRadius: "20px",
          height: "90%",
        }}
        className="shadow-lg p-3 mb-5 bg-white">
        <Link to={`/details/${id}`}>
          <Card.Img variant="top" src={image} />{" "}
        </Link>
        <Card.Body>
          <Link to={`/details/${id}`}>
            <Card.Title
              style={{
                color: "black",
                textDecoration: "none",
                textTransform: " uppercase",
              }}>
              {title}
            </Card.Title>
          </Link>
          <Card.Text className="container">{description}</Card.Text>

          <p>
            <strong>${price}</strong>
          </p>
        </Card.Body>{" "}
        <Button
          onClick={() => addToCart(id)}
          variant="primary"
          style={{
            marginBottom: "0",
            width: "100%",
            backgroundColor: "gray",
            borderRadius: "0 0 20px 20px",
          }}>
          Add to Cart
        </Button>
      </Card>
    </div>
  );
}
