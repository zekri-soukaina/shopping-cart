import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import { useUpedateDataContext } from "../Pages/Context";

export default function DetailsPage() {
  const routeParams = useParams();

  const id = encodeURIComponent(routeParams.id);

  // console.log(id);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setItems(response.data);
    };
    fetchData();
  }, [id]);

  // const [semilarItem, setSemilarItems] = useState([]);
  // function itemSemilar() {
  //   const semilar = filterItems.filter((item) => {
  //     return item.category === items.category;
  //   });
  //   setSemilarItems(semilar);
  //   console.log("semilarItem", semilarItem);
  // }

  const addToCart = useUpedateDataContext();
  return (
    <div>
      <br />
      {items ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            flexFlow: "wrap",
            boxShadow: "2px 8px 20px #ddd",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
          }}>
          <Image width="300em" variant="top" src={items.image} />
          <div style={{ width: "500px", height: "400px" }}>
            <div>
              <div
                className="d-flex w-100 justify-content-between"
                style={{ margin: " 30px 0" }}>
                <h5 className="mb-1">{items.title}</h5>
                <strong style={{ color: "red" }}>{items.price}$</strong>
              </div>
              <p className="mb-1">{items.description}</p>
              <small>{items.category}</small>
              <br />
              <Link to="/cart">
                <Button
                  onClick={() => addToCart(items.id)}
                  variant="dark"
                  style={{ margin: " 30px 0" }}>
                  Add to cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
      <br />
      {/* {semilarItem ? (
        semilarItem.map((item) => {
          return <Image width="300em" variant="top" src={item.image} />;
        })
      ) : (
        <p>searching..</p>
      )} */}
    </div>
  );
}
