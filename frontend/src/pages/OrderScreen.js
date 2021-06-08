import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
} from "@material-ui/core";
import useStyles from "../material-styles/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "../components/Checkout";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import { getOrderDetails } from "../actions/orderActions";
import Loader from "../components/Home/Loader";
const OrderScreen = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();
  const classes = useStyles();

  const orderDetails = useSelector((state) => state.orderCreate);
  const { order, loading, error } = orderDetails;

  order.itemsPrice = Number(
    order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  ).toFixed(2);

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, []);

  return loading ? (
    <Loader></Loader>
  ) : error ? (
    <Alert severity="error">{error}</Alert>
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={7}>
            <List>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <ListItem>
                <p>
                  <strong>Address: </strong>
                  {order.shippingAddress.address}, {order.shippingAddress.city},
                  {order.shippingAddress.postalCode},{" "}
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <Alert severity="info" style={{ marginLeft: "20px" }}>
                    Delivered on {order.deliveredAt}
                  </Alert>
                ) : (
                  <Alert severity="error" style={{ marginLeft: "20px" }}>
                    Not Delivered
                  </Alert>
                )}
              </ListItem>
              <Divider></Divider>
              <h2>Payment Method</h2>
              <ListItem>
                <p>
                  <strong>Method: </strong>
                  {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <Alert severity="info" style={{ marginLeft: "20px" }}>
                    Paid on {order.paidAt}
                  </Alert>
                ) : (
                  <Alert severity="error" style={{ marginLeft: "20px" }}>
                    Not Paid
                  </Alert>
                )}
              </ListItem>
              <Divider></Divider>
              <h2>Order Items</h2>
              <ListItem>
                <p>
                  <strong>Order Items: </strong>
                  {order.orderItems.length === 0 ? (
                    <Alert severity="info">Your order is empty!</Alert>
                  ) : (
                    <List>
                      {order.orderItems.map((item, index) => {
                        return (
                          <ListItem key={index}>
                            <Grid container>
                              <Grid item md={2}>
                                <Avatar
                                  className={classes.rootAvatar}
                                  src={item.image}
                                  alt={item.name}
                                ></Avatar>
                              </Grid>
                              <Grid item md={6}>
                                <Link
                                  to={`product/${item.product}`}
                                  className={classes.linkovi}
                                >
                                  {item.name}
                                </Link>
                              </Grid>
                              <Grid item md={4}>
                                {item.qty} x ${item.price} = $
                                {item.qty * item.price}
                              </Grid>
                            </Grid>
                          </ListItem>
                        );
                      })}
                    </List>
                  )}
                </p>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={4}>
            <Card>
              <List>
                <ListItem>
                  <h2>Order Summary</h2>
                </ListItem>
                <ListItem>
                  <Grid container justify="space-between">
                    <Grid item>Items: </Grid>
                    <Grid item>${order.itemsPrice}</Grid>
                  </Grid>
                </ListItem>
                <Divider></Divider>
                <ListItem>
                  <Grid container justify="space-between">
                    <Grid item>Shipping: </Grid>
                    <Grid item>${order.shippingPrice}</Grid>
                  </Grid>
                </ListItem>
                <Divider></Divider>
                <ListItem>
                  <Grid container justify="space-between">
                    <Grid item>Tax: </Grid>
                    <Grid item>${order.taxPrice}</Grid>
                  </Grid>
                </ListItem>
                <Divider></Divider>
                <ListItem>
                  <Grid container justify="space-between">
                    <Grid item>Total: </Grid>
                    <Grid item>${order.totalPrice}</Grid>
                  </Grid>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OrderScreen;
