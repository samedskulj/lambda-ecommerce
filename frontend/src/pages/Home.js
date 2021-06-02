import React, { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import Product from "../components/Product";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest products</h1>
      <Grid container spacing={4}>
        {products.map((product) => {
          return (
            <Grid key={product._id} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Home;
