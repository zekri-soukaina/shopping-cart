import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import CardItem from "../Components/CardItem";

export default function Homepage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setItems(response.data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", margin: "10px", flexFlow: "wrap" }}>
      {items ? (
        items.map((item) => {
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
  );
}
