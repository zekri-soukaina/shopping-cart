import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import CardItem from "../Components/CardItem";
import { useUpedateDataContext } from "../Pages/Context";

export default function Homepage() {
  const addToCart = useUpedateDataContext();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      // console.log("DATA", response.data);
      setItems(response.data);
    };
    fetchData();
  }, []);

  const sorting = (e) => {
    const res = e.target.value;
    // console.log(res);
    const filterbyCategory = items.filter((item) => {
      return item.category.replace(/ /g, "_") === res;
    });
    setItems(filterbyCategory);
  };

  return (
    <div>
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
          justifyContent: "space-around",
          flexFlow: "wrap",
          border: "1px solid #ddd",
          margin: "20px",
          padding: "10px",
          boxShadow: "2px 8px 20px #ddd",
          borderRadius: "10px",
        }}>
        {items ? (
          items.map((item) => {
            return (
              <CardItem
                key={item.id}
                id={item.id}
                category={item.category}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                addToCart={addToCart}
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
