import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import OrderContext from "../Store/OrderContext";
import React, { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartContext = useContext(OrderContext);

  const hasItem = cartContext.cartList.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.cartList.map((order) => (
        <CartItem
          key={order.id}
          id={order.id}
          name={order.name}
          description={order.description}
          lSize={order.lSize}
          mSize={order.mSize}
          sSize={order.sSize}
          quantity={order.quantity}
          price={order.price}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span>${cartContext.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && (
          <button
            className={classes.button}
            onClick={() => cartContext.clearCart()}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
