import React, { useState, useContext } from "react";
import Input from "../UI/Input";
import Card from "../UI/Card";
import classes from "./OrderShoe.module.css";
import Button from "../UI/Button";
import OrderContext from "../Store/OrderContext";
const OrderShoe = (props) => {

  const orderContext = useContext(OrderContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [lSize,setLSize]=useState("")
  const [mSize,setMSize]=useState("")
  const [sSize,setSSize]=useState("")

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const lSizeHandler = (event) =>{
    setLSize(event.target.value)
  }

  const mSizeHandler = (event) =>{
    setMSize(event.target.value)
  }

  const sSizeHandler = (event) =>{
    setSSize(event.target.value)
  }
 
  const submitHandler = (event) => {
    event.preventDefault();

    const newOrder = { name, price, description,lSize,mSize,sSize };
    orderContext.addOrder(newOrder);

    //props.onOrder(newOrder);

    setName("");
    setPrice("");
    setDescription("");
    setLSize("");
    setMSize("")
    setSSize("")

  
  };
  
  return (
    <Card className={classes.orderform}>
      <form onSubmit={submitHandler}>
        <Input
          label="ShoeName:"
          type="text"
          id="name"
          value={name}
          onChange={nameHandler}
        />
        <Input
          label="Description:"
          type="text"
          id="desc"
          value={description}
          onChange={descriptionHandler}
        />
        <Input
          label="Price:"
          type="number"
          id="price"
          value={price}
          onChange={priceHandler}
        />

        <div className={classes.quantity}>
          <h5>Quantity Avilable</h5>

          <Input
            label="L"
            type="number"
            id="l"
            value={lSize}
            onChange={lSizeHandler}
          />
          <Input
            label="M"
            type="number"
            id="m"
            value={mSize}
            onChange={mSizeHandler}
          />
          <Input
            label="S"
            type="number"
            id="s"
            value={sSize}
            onChange={sSizeHandler}
          />
        </div>
        <div className={classes.action}>
          <Button type="submit">Add order</Button>
        </div>
      </form>
    </Card>
  );
};
export default OrderShoe;
