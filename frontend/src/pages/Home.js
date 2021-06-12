import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container } from "@material-ui/core";
import Product from "../components/Product";
import axios from "axios";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Home/Loader";

const Home = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);
  return (
    <>
      <h1>Latest products</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Grid container spacing={4}>
          {products.map((product) => {
            return (
              <Grid key={product._id} item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Home;
