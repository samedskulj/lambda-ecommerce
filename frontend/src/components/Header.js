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
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ShoppingCartSharpIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Lambda
            </Typography>
            <Button color="inherit" className={classes.btnlogin}>
              <IconButton color="inherit">
                <AddShoppingCartIcon></AddShoppingCartIcon>
              </IconButton>
              Cart
            </Button>
            <Button color="inherit">
              <IconButton color="inherit">
                <PermContactCalendarIcon></PermContactCalendarIcon>
              </IconButton>
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
