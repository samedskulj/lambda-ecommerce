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
  TextField,
} from "@material-ui/core";
import Rating from "../components/Rating";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "../material-styles/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {
  listProductDetails,
  createProductRev,
} from "../actions/productActions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT_CREATE_REVIEW_RESET } from "../reducer-const/productConst";
import Alert from "@material-ui/lab/Alert";
const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const productDetailList = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetailList;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { error: errorReview, success: successProductReview } =
    productReviewCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (successProductReview) {
      alert("Review submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(match.params.id));
  }, [match, dispatch, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductRev(match.params.id, { rating, comment }));
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
          <Grid item xs={12} md={3}>
            <Card>
              <CardActionArea className={classes.cardCart}>
                <List>
                  <ListItem>
                    <Grid container alignItems="space-around">
                      <Grid item xs={9} md={9}>
                        Price:
                      </Grid>
                      <Grid item>${product.price}</Grid>
                    </Grid>
                  </ListItem>
                  <Divider></Divider>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={9} md={9}>
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
                        <Grid item xs={9} md={9}>
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
        <Grid container>
          <Grid item md={6}>
            <h2>Reviews</h2>
            {product.reviews.length === 0 && (
              <Alert severity="info">No Reviews</Alert>
            )}
            <List>
              {product.reviews.map((review) => {
                return (
                  <ListItem
                    className={classes.reviewShowListItem}
                    key={review._id}
                  >
                    <strong>{review.name}</strong>
                    <div>
                      <Rating value={review.rating}></Rating>
                    </div>
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListItem>
                );
              })}
              <ListItem className={classes.reviewSign}>
                <h2>Write a Review</h2>
                {errorReview && <Alert severity="warning">{errorReview}</Alert>}
                {userInfo ? (
                  <form className={classes.form} onSubmit={submitHandler}>
                    <FormControl>
                      <Select
                        native
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="1">1 - Very Bad</option>
                        <option value="2">2 - Not so Bad</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very good</option>
                        <option value="5">5 - Excellent!</option>
                      </Select>
                    </FormControl>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="comment"
                      label="Write a comment..."
                      type="textarea"
                      rows="3"
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                ) : (
                  <Alert severity="info">
                    Please sign in to write a review!
                  </Alert>
                )}
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default ProductScreen;
