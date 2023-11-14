import React, { useState } from "react";
import OrderContext from "./OrderContext";

const OrderProvider = (props) => {
  const [orders, setOrders] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addOrderHandler = (order) => {
    order.quantity = 0;

    setOrders((prevOrders) => [
      ...prevOrders,
      {
        id: Math.random().toString(),
        ...order,
      },
    ]);
  };

  const decreaseQuantityHandler = (orderId, size) => {
    setOrders((prevOrders) => {
      return prevOrders.map((order) => {
        if (order.id === orderId) {
          const newSize = Math.max(order[size] - 1, 0);
          const quantityChange = order[size] > newSize ? 1 : 0;
          return {
            ...order,
            [size]: newSize,
            quantity: order.quantity + quantityChange,
          };
        }
        return order;
      });
    });
  };

  const cartHandler = (item, size) => {
    const newSize = Math.max(item[size] - 1, 0);
    const sizeChange = item[size] > newSize ? 1 : 0;
    const priceChange = item[size] > newSize ? Number(item.price) : 0;
    const existingItem = cartList.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItems = cartList.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            price: Number(cartItem.price) + Number(priceChange),
            [size]: Number(cartItem[size]) + Number(sizeChange),
          };
        }
        return cartItem;
      });

      setCartList(updatedItems);
    } else {
      setCartList((prevCartList) => [
        ...prevCartList,
        {
          ...item,
          lSize: size === "L" ? 1 : 0,
          mSize: size === "M" ? 1 : 0,
          sSize: size === "S" ? 1 : 0,
          [size]: 1,
        },
      ]);
    }

    setTotalAmount((prevTotal) => prevTotal + Number(priceChange));
  };

  const resetOrderQuantities = () => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => ({ ...order, quantity: 0 }))
    );
  };

  const clearCart = () => {
    setCartList([]);
    setTotalAmount(0);
    resetOrderQuantities();
  };

  const cartContext = {
    orders: orders,
    addOrder: addOrderHandler,
    decreaseQuantity: decreaseQuantityHandler,
    clearCart: clearCart,
    cartList: cartList,
    addToCart: cartHandler,
    totalAmount: totalAmount,
  };

  return (
    <OrderContext.Provider value={cartContext}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
