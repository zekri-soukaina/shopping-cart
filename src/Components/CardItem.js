import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardItem.css";

export default function CardItem({ id, image, title, description, price }) {
  return (
    <div style={{ margin: "10px" }}>
      <Card
        style={{
          width: "18rem",
          borderRadius: "20px",
          height: "100%",
        }}
        className="shadow-lg p-3 mb-5 bg-white">
        <Link to={`/details/${id}`}>
          <Card.Img variant="top" src={image} />{" "}
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="container">{description}</Card.Text>

          <p>
            <strong>${price}</strong>
          </p>
        </Card.Body>{" "}
        <Button
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
