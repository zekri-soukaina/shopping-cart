import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "./svg/icons8-menu.svg";
import Close from "./svg/icons8-close-window-100.png";
import CartIcon from "./svg/icons8-shopping-cart-promotion-100.png";

import "./NavBar.css";

export default function NavBar() {
  const [state, setState] = useState({ toggle: false });
  const menuToggle = () => {
    setState({ toggle: !state.toggle });
  };
  const { toggle } = state;

  return (
    <div>
      <header>
        <div className="menu" onClick={menuToggle}>
          <img src={Menu} alt="" />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">Time&#128722;</Link>
          </h1>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <Link to="/details">Product</Link>
            </li>

            <li>
              <Link to="/login">Login / Signup</Link>
            </li>
            <li className="close" onClick={menuToggle}>
              <img src={Close} alt="" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>0</span>
            <Link to="#">
              <img src={CartIcon} alt="" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
