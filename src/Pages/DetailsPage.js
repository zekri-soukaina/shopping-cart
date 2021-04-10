import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Image, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CardItem from "../Components/CardItem";

export default function DetailsPage() {
  const routeParams = useParams();

  const id = encodeURIComponent(routeParams.id);

  console.log(id);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response.data);
      setItems(response.data);
    };
    fetchData();
  }, [id]);

  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log(response.data);
      setFilterItems(response.data);
    };
    fetchData();
  }, []);

  const sorting = (e) => {
    const res = e.target.value;
    console.log(res);

    const filterbyCategory = filterItems.filter((item) => {
      return item.category.replace(/ /g, "_") === res;
    });
    setFilterItems(filterbyCategory);
  };
  // const [semilarItem, setSemilarItems] = useState([]);
  // function itemSemilar() {
  //   const semilar = filterItems.filter((item) => {
  //     return item.category === items.category;
  //   });
  //   setSemilarItems(semilar);
  //   console.log("semilarItem", semilarItem);
  // }

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
            margin: "10px",
            borderRadius: "10px",
          }}>
          <Image width="300em" variant="top" src={items.image} />
          <div style={{ width: "500px", height: "300px" }}>
            <div>
              <div
                className="d-flex w-100 justify-content-between"
                style={{ margin: " 30px 0" }}>
                <h5 className="mb-1">{items.title}</h5>
                <strong style={{ color: "red" }}>{items.price}$</strong>
              </div>
              <p className="mb-1">{items.description}</p>
              <small>{items.category}</small>
            </div>
            <Link to="#">
              <Button variant="dark" style={{ margin: " 30px 0" }}>
                Add to cart
              </Button>
            </Link>
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
      <h1 style={{ fontFamily: "fantasy", margin: "10px" }}>
        Select the category preferable :
      </h1>
      <Form.Control
        as="select"
        defaultValue="Choose..."
        onChange={sorting}
        style={{ width: "300px", margin: "20px" }}>
        <option value="default">Choose...</option>
        <option value="men_clothing">Men &#128372;&#65039;</option>
        <option value="women_clothing">Women &#128131;</option>
        <option value="jewelery">Jewelery &#128141;</option>
        <option value="electronics">Electronic &#128250;</option>
      </Form.Control>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          flexFlow: "wrap",
        }}>
        {filterItems ? (
          filterItems.map((item) => {
            return (
              <CardItem
                key={item.id}
                category={item.category}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            );
          })
        ) : (
          <p>loading..</p>
        )}
      </div>
    </div>
  );
}
