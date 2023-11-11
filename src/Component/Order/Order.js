import React, { useState,Fragment } from "react";
import OrderShoe from "./OrderShoe";
import OrderList from "./OrderList";

const Order = (props) => {

  const [showOrderList, setShowOrderList] = useState(false);

  const showOrderListHandler = () => {
    setShowOrderList(true);
  };
  

  return (
    <Fragment>
    
    <OrderShoe id={props.id}/>
    <OrderList list={showOrderList} onshow={showOrderListHandler}/>
  </Fragment>
  )
  
};
export default Order;
