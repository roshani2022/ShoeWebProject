import React from "react";
const OrderContext = React.createContext({
  orders: [],
  cartList:[],
  addOrder: (order) => {},
  deleteOrder: (orderId) => {},
  addToCart:(item)=>{},
  totalAmount: 0,
});

export default OrderContext
