import React, { useState } from "react";
import OrderProvider from "./Component/Store/OrderProvider";
import "./App.css";
import Order from "./Component/Order/Order";
import Header from "./Component/Layout/Header";
import Cart from "./Component/Cart/Cart";


const App = () => {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <OrderProvider>
       {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Order />
      </main>
    </OrderProvider>
  );
};
export default App;