import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = React.createContext();
export function useDataContext() {
  return useContext(DataContext);
}

const UpdateDataContext = React.createContext();
export function useUpedateDataContext() {
  return useContext(UpdateDataContext);
}

export function ContextProvider({ children }) {
  const [items, setItems] = useState([]);

  var count = { count: 1 };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setItems(response.data);
    };
    fetchData();
  }, []);

  let product = items.map((item) => {
    return { ...item, ...count };
  });
  // console.log("product", product);

  const [stateCart, setState] = useState({ cart: [], total: 0 });

  //function to add item to cart and to check to not add it twice
  const addToCart = (id) => {
    const { cart } = stateCart;

    const checkDuplicated = cart.every((item) => {
      return item.id !== id;
    });
    if (checkDuplicated) {
      const data = product.filter((item) => {
        return item.id === id;
      });
      setState({ cart: [...cart, ...data] });
    } else {
      alert("THE PRODUCT HAS BEEN ADDED TO THE CART");
    }
  };

  // reduce function that called by cart - button to minimize items and check to keep the last item ! no item below zezo
  const reduction = (id) => {
    const { cart } = stateCart;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setState({ cart: cart });
    getTotal();
  };

  //ivrease function thgat called by cart + button to icrease amout of the items
  const increase = (id) => {
    const { cart } = stateCart;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setState({ cart: cart });
    getTotal();
  };

  const removeProduct = (id) => {
    if (window.confirm("DO YOU WANT TO REMOVE THIS ITEM? ")) {
      const { cart } = stateCart;
      cart.forEach((item, index) => {
        if (item.id === id) {
          //splice() methode to remove or add element to an array
          //remove 1 element at index=index
          cart.splice(index, 1);
        }
      });
      setState({ cart: cart });
      getTotal();
    }
  };

  // var total = { total: 0 };
  // stateCart.puch(total);
  // stateCart.merge(total);
  // Object.assign(stateCart, total);

  const getTotal = () => {
    const { cart } = stateCart;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    setState({ cart: cart, total: res.toFixed(2) });
    console.log("state", stateCart.total);
  };

  //TO STORE OUR CART ITEM DONT DESAPAIRE WHILE WE REFRECH THE PAGE
  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(stateCart.cart));
    localStorage.setItem("dataTotal", JSON.stringify(stateCart.total));
  }, [stateCart]);

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setState({ cart: dataCart });

    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal) setState({ total: dataTotal });
  }, []);

  const { cart, total } = stateCart;
  console.log("state", stateCart.cart);
  console.log("state", stateCart.total);
  return (
    <DataContext.Provider
      value={{
        items,
        stateCart,
        cart,
        total,
        product,
        reduction,
        increase,
        removeProduct,
        getTotal,
      }}>
      <UpdateDataContext.Provider value={addToCart}>
        {children}
      </UpdateDataContext.Provider>
    </DataContext.Provider>
  );
}
