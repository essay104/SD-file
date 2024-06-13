import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../reducer/actions/productActions";
import { useDispatch } from "react-redux";

const ProductAll = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const [query, setQuery] = useSearchParams();

  // const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      <Row>
        {productList.map((item, idx) => (
          <Col key={idx} lg={3}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
