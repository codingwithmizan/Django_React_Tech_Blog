import React, { createContext, useReducer } from "react";

const textReducer = (state, action) => {
  if (action.type === "Textaction") {
    return {
      ...state,
      textValue: action.payload,
    };
  }
  return state;
};

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(textReducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
