import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useStyles from "./material-styles/styles";
import { theme } from "./material-styles/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProductScreen from "./pages/ProductScreen";
import CartScreen from "./pages/CartScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ProfileScreen from "./pages/ProfileScreen";
import ShippingScreen from "./pages/ShippingScreen";
import PaymentScreen from "./pages/PaymentScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import OrderScreen from "./pages/OrderScreen";
import UserScreenList from "./pages/UserScreenList";
import UserEditScreen from "./pages/UserEditScreen";
import ProductListScreen from "./pages/ProductListScreen";
function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <Switch>
          <ThemeProvider theme={theme}>
            <Header></Header>
            <Container>
              <Route exact path="/" component={Home}></Route>
              <Route
                exact
                path="/product/:id"
                component={ProductScreen}
              ></Route>
              <Route path="/cart/:id?" component={CartScreen}></Route>
              <Route path="/login" component={LoginScreen}></Route>
              <Route path="/register" component={RegisterScreen}></Route>
              <Route path="/profile" component={ProfileScreen}></Route>
              <Route path="/shipping" component={ShippingScreen}></Route>
              <Route path="/payment" component={PaymentScreen}></Route>
              <Route path="/placeorder" component={PlaceOrderScreen}></Route>
              <Route
                exact
                path="/admin/userList"
                component={UserScreenList}
              ></Route>
              <Route
                path="/admin/user/:id/edit"
                component={UserEditScreen}
              ></Route>
              <Route path="/order/:id" component={OrderScreen}></Route>
              <Route
                path="/admin/products"
                component={ProductListScreen}
              ></Route>
            </Container>
          </ThemeProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
