import { combineReducers } from "@reduxjs/toolkit";
import athenticateReducer from "./athenticateReducer";
import productReducer from "./ProductReducer";

export default combineReducers({
  auth: athenticateReducer,
  product: productReducer,
});


