import { type } from "@testing-library/user-event/dist/type";

const getProducts = (searchQuery) => {
  return async (dispatch, getState) => {
    const url = `https://my-json-server.typicode.com/essay104/json/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({type:"GET_PRODUCT_SUCCESS"})
  };
};

export const productAction = { getProducts };
