// import React,{ useContext } from "react";

// import classes from "./CartItem.module.css";
// import OrderContext from "../Store/OrderContext";

// const CartItem = (props) => {
//   const price = `$${Number(props.price).toFixed(2)}`;

//   const cartListContext = useContext(OrderContext)
//    console.log(cartListContext.cartList)
//    let cartList = cartListContext.cartList
//  console.log(props)

//   return (
//     <li className={classes["cart-item"]} key={props.id}>
//       {cartList.map((cartItem)=>(
//         <div>
//         <div className={classes.summary}>
//           <span className={classes.id}>
//             {props.name} - {props.description}
//           </span>
//           {cartItem.lSize>0 &&  <span>L{cartItem.lSize}</span>}
//           {cartItem.mSize>0 &&  <span>M{cartItem.mSize}</span>}
//           {cartItem.sSize>0 &&  <span>s{cartItem.sSize}</span>}
          
//           <span className={classes.price}>{price}</span>
//         </div>
//       </div>
//       ))}
      
//     </li>
//   );
// };

// export default CartItem;

import classes from "./CartItem.module.css";

const CartItem = (props) => {
    

  return (
    <li className={classes["cart-item"]}>
      <div>
        <div className={classes.summary}>
          <span className={classes.id}>
            {props.name} - {props.description}
          </span>
          {/* <span>L{props.lSize}</span>
          <span>M{props.mSize}</span>
          <span>S{props.sSize}</span> */}
          <span>{props.size}</span>
          <span>{props.quantity}</span>
          <span className={classes.price}>{Number(props.price)*Number(props.quantity)}</span>
          
        </div>
      </div>
    </li>
  );
};

export default CartItem;


