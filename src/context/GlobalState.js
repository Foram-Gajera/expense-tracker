import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initialState
const initialState = {
  transactions: [
    { id: 1, text: "First", amount: 100 },
    { id: 2, text: "Second", amount: -50 },
    { id: 3, text: "Third", amount: -10 },
    { id: 4, text: "Fourth", amount: 30 },
  ],
};

//create context
export const GlobalContext = createContext(initialState);

//provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
