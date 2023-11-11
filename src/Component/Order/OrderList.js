// import React, { useContext } from "react";
// import OrderContext from "../Store/OrderContext";
// import Card from "../UI/Card";
// import classes from './OrderList.module.css'

// const OrderList = () => {
//   const orderContext = useContext(OrderContext);

//   const handleQuantityClick = (order, size) => {
//     // Call the context function to decrease the quantity
//     orderContext.decreaseQuantity(order.id, size,);
//     orderContext.addToCart(order,size)
 
//   };
//    const buyLargeHandler  = (order) => {
//       console.log("order list ", order)

//       const largeSize = {
//         ...order,lSize:1,
//         mSize:0,
//         sSize:0
//       }
//       orderContext.addToCart(largeSize)
//    }
//   const showOrder = (orders) => {
//     return orders.map((order) => (
//       <li key={order.id}>
//         {order.name} - {order.description} -{order.price} {"  "}

//         <button
//           type="button"
//           onClick={() =>buyLargeHandler(order)}  
//         >
//           Buy Large({order.lSize})
//         </button>{" "}
//         <button
//           type="button"
//           onClick={() => handleQuantityClick(order.id, "mSize")}  
//         >
//           Buy Medium({order.mSize})
//         </button>{" "}
//         <button
//           type="button"
//           onClick={() => handleQuantityClick(order.id, "sSize")}
//         >
//           Buy Small({order.sSize})
//         </button>
//       </li>
//     ));
//   };
//   return (
//     <Card className={classes.orderlist}>
//       <ul >{showOrder(orderContext.orders)}</ul>
//     </Card>
//   );
// };

// export default OrderList;

import React, { useContext } from "react";
import OrderContext from "../Store/OrderContext";
import Card from "../UI/Card";
import classes from './OrderList.module.css'

const OrderList = () => {
  const orderContext = useContext(OrderContext);
  

  const handleQuantityClick = (order, size) => {
    // Call the context function to decrease the quantity
    orderContext.decreaseQuantity(order.id, size,);
    orderContext.addToCart(order,size)

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
    <Card className={classes.orderlist}>
      <ul >{showOrder(orderContext.orders)}</ul>
    </Card>
  );
};

export default OrderList;




