import React, { useContext } from "react";
import OrderContext from "../Store/OrderContext";
import Card from "../UI/Card";
import classes from "./OrderList.module.css";

const OrderList = () => {
  const orderContext = useContext(OrderContext);

  const handleQuantityClick = (order, size) => {
    orderContext.decreaseQuantity(order.id, size);
    orderContext.addToCart(order, size);
  };

  const showOrder = (orders) => {
    return orders.map((order) => (
      <li key={order.id}>
        {order.name} - {order.description} -{order.price} {"  "}
        <button
          type="button"
          onClick={() => handleQuantityClick(order, "lSize")}
        >
          Buy Large({order.lSize})
        </button>{" "}
        <button
          type="button"
          onClick={() => handleQuantityClick(order, "mSize")}
        >
          Buy Medium({order.mSize})
        </button>{" "}
        <button
          type="button"
          onClick={() => handleQuantityClick(order, "sSize")}
        >
          Buy Small({order.sSize})
        </button>
      </li>
    ));
  };
  return (
    orderContext.orders.length > 0 && (
      <Card className={classes.orderlist}>
        <ul>{showOrder(orderContext.orders)}</ul>
      </Card>
    )
  );
};

export default OrderList;
