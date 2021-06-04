import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useStyles from "../material-styles/styles";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { logout } from "../actions/userActions";
const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const classes = useStyles();
  const logoutHandler = () => {
    dispatch(logout());
    window.location.reload();
  };
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
            {userInfo ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                  <Typography
                    className={classes.headerProfileLink}
                    variant="body2"
                  >
                    {userInfo.name}
                  </Typography>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/profile" className={classes.linkovi}>
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={logoutHandler}>Log out</MenuItem>
                </Menu>
              </div>
            ) : (
              <Link className={classes.linkovi} to="/login">
                <Button color="inherit">
                  <PermContactCalendarIcon
                    className={classes.btnlogin}
                  ></PermContactCalendarIcon>
                  Login
                </Button>
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.headerMargin}></div>
    </>
  );
};

export default Header;
