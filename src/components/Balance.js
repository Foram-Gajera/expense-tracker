import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const context = useContext(GlobalContext);
  const amounts = context.transactions.map((item) => item.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //,0 is to assign accumulator defult value start from zero
  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{total}</h1>
    </>
  );
};

export default Balance;
