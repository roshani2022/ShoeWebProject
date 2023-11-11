// import React, { useState } from "react";
// import OrderContext from "./OrderContext";

// const OrderProvider = (props) => {
//   const [orders, setOrders] = useState([]);
//   const [cartList, setCartList] = useState([]);

//   const addOrderHandler = (order) => {
//     order.quantity = 0;

//     setOrders((prevOrders) => [
//       ...prevOrders,
//       {
//         id: Math.random().toString(),
//         ...order,
//       },
//     ]);
//   };

//   const decreaseQuantityHandler = (orderId, size) => {
//     setOrders((prevOrders) => {
//       return prevOrders.map((order) => {
//         if (order.id === orderId) {
//           const newSize = Math.max(order[size] - 1, 0);
//           const quantityChange = order[size] > newSize ? 1 : 0; // Check if the size is decr
//           return {
//             ...order,
//             [size]: newSize, // Ensure the quantity doesn't go below zero
//             // quantity: newSize > 0 ? order.quantity + 1  : order.quantity,
//             quantity: order.quantity + quantityChange,
//           };
//         }
//         return order;
//       });
//     });
//   };

//   const clearCart = () => {
//     setCartList([]);
//   };

//   const cartHandler = (item) => {
//     // const existingItem = cartList.find((cartItem) => cartItem.id === item.id);

//     // if (existingItem) {
//     //   const updatedItems = cartList.map((cartItem) => {
//     //     if (cartItem.id === item.id) {
//     //       return {
//     //         ...cartItem,
//     //       };
//     //     }
//     //     return cartItem;
//     //   });

//     //   setCartList(updatedItems);
//     // } else {
//     //   setCartList((prevCartList) => [...prevCartList, item]);
//     // }

//     const existingItem = cartList.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       const updatedItems = cartList.map((cartItem) => {
//         if (cartItem.id === item.id) {
//           return {
//             ...cartItem,
//             quantity: cartItem.quantity + item.quantity,
//             price: cartItem.price + item.price,
//             lSize: cartItem.lSize + item.lSize,
//             mSize: cartItem.mSize + item.mSize,
//             sSize: cartItem.sSize + item.sSize,
//           };
//         }
//         return cartItem;
//       });

//       setCartList(updatedItems);
//     } else {
//       setCartList((prevItems) => [...prevItems, item]);
//     }
//   };

//   console.log("cart list", cartList);

//   const cartContext = {
//     orders: orders,
//     addOrder: addOrderHandler,
//     decreaseQuantity: decreaseQuantityHandler,
//     clearCart: clearCart,
//     cartList: cartList,
//     addToCart: cartHandler,
//   };

//   return (
//     <OrderContext.Provider value={cartContext}>
//       {props.children}
//     </OrderContext.Provider>
//   );
// };

// export default OrderProvider;

import React, { useState } from "react";
import OrderContext from "./OrderContext";

const OrderProvider = (props) => {
  const [orders, setOrders] = useState([]);
  const [cartList, setCartList] = useState([]);

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
          const quantityChange = order[size] > newSize ? 1 : 0; // Check if the size is decr

          return {
            ...order,
            [size]: newSize, // Ensure the quantity doesn't go below zero
            // quantity: newSize > 0 ? order.quantity + 1  : order.quantity,
            quantity: order.quantity + quantityChange,
          };
        }
        return order;
      });
    });
  };

  const clearCart = () => {
    setCartList([]);
  };

  const cartHandler = (item, size) => {
    // const newSize = Math.max(item[size]-1,0)
    // const priceChange = item[size] > newSize ? Number(item.price) : 0;
    // const existingItem = cartList.find((cartItem) => cartItem.id === item.id);

    //     if (existingItem) {
    //       const updatedItems = cartList.map((cartItem) => {
    //         if (cartItem.id === item.id) {
    //           return {
    //             ...cartItem,
    //             price: Number(cartItem.price) +Number( priceChange),
    //             ...cartItem.quantity

    //           };
    //         }
    //         return cartItem;
    //       });

    //   setCartList(updatedItems);
    // } else {
    //   setCartList((prevCartList) => [...prevCartList, item]);
    // }
    const existingItem = cartList.find(
      (cartItem) => (cartItem.name === item.name)
    );
    console.log('item',existingItem)
    if(existingItem){
      const newCartList = Object.assign(cartList,{})
      newCartList.forEach((i)=>{
        if(i.name===existingItem.name){
          i.quantity++

        } 
      })
      setCartList([...newCartList])
      console.log('item',existingItem)
    }
    else{
      setCartList([
        ...cartList,
        {
          id: Math.random.toString(),
          name: item.name,
          description: item.description,
          price: item.price,
          size: size,
          quantity: 1,
        },
      ]);
    }
    
  };

  const cartContext = {
    orders: orders,
    addOrder: addOrderHandler,
    decreaseQuantity: decreaseQuantityHandler,
    clearCart: clearCart,
    cartList: cartList,
    addToCart: cartHandler,
  };

  return (
    <OrderContext.Provider value={cartContext}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
