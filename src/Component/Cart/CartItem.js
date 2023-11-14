import React, { useState } from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price}`;

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const renderSizeButton = (size, quantity) => {
    if (quantity) {
      return (
        <button onClick={() => handleSizeClick(size)}>
          {size}({quantity})
        </button>
      );
    }
  };

  return (
    <li className={classes["cart-item"]} key={props.id}>
      <div>
        <div className={classes.summary}>
          <span className={classes.id}>
            {props.name} - {props.description}
          </span>

          <div className={classes.actions}>
            {renderSizeButton("L", props.lSize)}
            {renderSizeButton("M", props.mSize)}
            {renderSizeButton("S", props.sSize)}
          </div>

          <span className={classes.price}>{price}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
