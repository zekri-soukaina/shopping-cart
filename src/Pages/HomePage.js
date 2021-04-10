import React from "react";
import { Carousel } from "react-bootstrap";
import logo from "./img/logo.png";
import logo2 from "./img/logo2.png";
export default function Homepage() {
  return (
    <div
      style={{
        display: "flex",

        justifyContent: "space-around",
        flexFlow: "wrap",
        border: "1px solid #ddd",
        margin: "20px",
        padding: "10px",
        boxShadow: "2px 8px 20px #ddd",
        borderRadius: "10px",
      }}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src={logo} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={logo2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
      <p>
        Our shopping App make-it-Happen &#128722; to make the the shopping world
        in your hand and easy to shop from anywhere in second
      </p>
      <p>your feedback make us grow in better way!</p>
    </div>
  );
}
