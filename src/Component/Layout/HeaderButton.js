import React, { useContext } from "react";
import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import OrderContext from "../Store/OrderContext";
const HeaderButton = (props) => {
  const cartContext = useContext(OrderContext);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span>{cartContext.msg}</span>
      <span className={classes.badge}>
        {" "}
        {cartContext.orders.reduce(
          (totalQuantity, order) => totalQuantity + order.quantity,
          0
        )}
      </span>
    </button>
  );
};
export default HeaderButton;
