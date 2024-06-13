import React from "react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [query, setQuery] = useSearchParams();
  console.log(query.get("q"));
  return <div>Product</div>;
};

export default Product;
