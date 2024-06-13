const initialState = {};
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Get_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    default:
      return { ...state };
  }
};

export default productReducer;
