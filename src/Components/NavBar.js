import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "./img/logo16.ico";

export default function NavBar() {
  return (
    <div>
      <Nav fill variant="tabs">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="170"
            height="100"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>

        <Nav.Link
          href="/details"
          style={{
            marginTop: "25px",
            color: "#FF6B6B",
            fontFamily: "fantasy",
            fontSize: "25px",
          }}>
          Items
        </Nav.Link>

        <Nav.Link
          href="/login"
          style={{
            marginTop: "25px",
            color: "#FF6B6B",
            fontFamily: "fantasy",
            fontSize: "25px",
          }}>
          Signup/login
        </Nav.Link>

        <Nav.Link href="/cart" style={{ marginTop: "25px" }}>
          <h1> &#128722;</h1>
        </Nav.Link>
      </Nav>
    </div>
  );
}
