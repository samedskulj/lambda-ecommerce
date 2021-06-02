import React from "react";
import products from "../products";
import { Grid, Container } from "@material-ui/core";
import Product from "../components/Product";
const Home = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Grid container spacing={4}>
        {products.map((product) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Home;
