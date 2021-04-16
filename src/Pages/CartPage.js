import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDataContext } from "../Pages/Context";

import "./CartPage.css";

export default function CartPage() {
  const {
    cart,
    total,
    reduction,
    increase,
    removeProduct,
    getTotal,
  } = useDataContext();

  useEffect(() => {
    getTotal();
  }, [getTotal]);
  // useEffect(getTotal, []);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Cart empty </h2>;
  } else {
    return (
      <div>
        {cart.map((item) => (
          <div
            className="details cart shadow-lg p-3 mb-5 bg-white"
            key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price * item.count}</span>
              </div>
              <span>{item.category}</span>
              <p>{item.description}</p>

              <div className="amount">
                <button className="count" onClick={() => reduction(item.id)}>
                  {" "}
                  -{" "}
                </button>
                <span>{item.count}</span>
                <button className="count" onClick={() => increase(item.id)}>
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
            <div className="delete" onClick={() => removeProduct(item.id)}>
              X
            </div>
          </div>
        ))}
        <div className="total">
          <Link to="/payment">Payment</Link>
          <h3>Total: ${total}</h3>
        </div>
      </div>
    );
  }
}
