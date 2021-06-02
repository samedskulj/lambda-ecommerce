import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "../material-styles/styles";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Link to="/" className={classes.linkovi}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <ShoppingCartSharpIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" className={classes.title}>
              Lambda
            </Typography>
            <Link className={classes.linkovi} to="/cart">
              <Button color="inherit">
                <AddShoppingCartIcon
                  className={classes.btnlogin}
                ></AddShoppingCartIcon>
                Cart
              </Button>
            </Link>
            <Link className={classes.linkovi} to="/signin">
              <Button color="inherit">
                <PermContactCalendarIcon
                  className={classes.btnlogin}
                ></PermContactCalendarIcon>
                Login
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.headerMargin}></div>
    </>
  );
};

export default Header;
