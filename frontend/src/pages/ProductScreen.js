import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Rating from "../components/Rating";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "../material-styles/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { listProductDetails } from "../actions/productActions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetailList = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetailList;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [match, dispatch]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const classes = useStyles();
  return (
    <>
      <>
        <Link to="/" className={classes.linkovi}>
          <Button color="primary">Go Back</Button>
        </Link>
        <Grid container>
          <Grid item md={6}>
            <img
              src={product.image}
              alt={product.name}
              fluid
              className={classes.gridImg}
            ></img>
          </Grid>
          <Grid item md={3} className={classes.grid3RatingName}>
            <List>
              <ListItem>
                <h3>{product.name}</h3>
              </ListItem>
              <Divider></Divider>
              <ListItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListItem>
              <Divider></Divider>
              <ListItem>Price: ${product.price}</ListItem>
              <Divider></Divider>
              <ListItem>{product.description}</ListItem>
            </List>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardActionArea className={classes.cardCart}>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid item md={9}>
                        Price:
                      </Grid>
                      <Grid item>${product.price}</Grid>
                    </Grid>
                  </ListItem>
                  <Divider></Divider>
                  <ListItem>
                    <Grid container>
                      <Grid item md={9}>
                        Status:
                      </Grid>
                      <Grid item>
                        {product.countInStock === 0 ? (
                          <strong>Out of stock</strong>
                        ) : (
                          <strong>In Stock</strong>
                        )}
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider></Divider>
                  {product.countInStock > 0 && (
                    <ListItem>
                      <Grid container>
                        <Grid item md={9}>
                          Qty:
                        </Grid>
                        <Grid item>
                          <FormControl>
                            <Select
                              native
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {" "}
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}
                  <Divider></Divider>
                  <ListItem>
                    <Button
                      onClick={addToCartHandler}
                      variant="contained"
                      color="primary"
                      fullWidth="true"
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </ListItem>
                </List>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default ProductScreen;
