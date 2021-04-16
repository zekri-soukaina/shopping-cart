import axios from "axios";
import React, { useEffect, useState } from "react";

import CardItem from "../Components/CardItem";

import { useUpedateDataContext } from "../Pages/Context";

export default function ProductsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setItems(response.data);
    };
    fetchData();
  }, []);

  const addToCart = useUpedateDataContext();

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
  );
}
