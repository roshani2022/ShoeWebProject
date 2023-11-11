import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import OrderContext from "../Store/OrderContext";
import React, { useContext,useState,useEffect } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartContext = useContext(OrderContext);

  let  [totalAmount,setTotalAmount] =useState(0)
//let totalAmount=0;

  // cartContext.orders.forEach((order) => {
  //   totalAmount += order.price * order.quantity;

  //   console.log(order.quantity);
  // });

  useEffect(() => {
    let calculatedTotalAmount = 0;
    cartContext.cartList.forEach((order) => {
      calculatedTotalAmount += order.price * order.quantity;
    });
    setTotalAmount(calculatedTotalAmount);
  }, [cartContext.cartList]);

  const hasItem = cartContext.cartList.length > 0;

  const orderHandler = () => {
    cartContext.clearCart()
   //totalAmount=0;
   setTotalAmount(0)
  };

  console.log("Total Amount:", totalAmount);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.cartList.map((order) => (
        <CartItem
          key={order.id}
          id={order.id}
          name={order.name}
          description={order.description}
          // lSize={order.lSize}
          // mSize={order.mSize}
          // sSize={order.sSize}
          quantity={order.quantity}
          size={order.size}
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
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
