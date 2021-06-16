import React from "react";
import useStyles from "../../material-styles/mainstyles";
import "../../sass/mainscreen.scss";
import { Grid, Button } from "@material-ui/core";
import Wallet from "../../images/wallet.png";
import Cruise from "../../images/cruise.png";
import CreditCard from "../../images/credit-card.png";
import Refund from "../../images/refund.png";
const MainDescription = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className="maindesc-row">
        <Grid item md={3} xs={12}>
          <div className="maindesc-first">
            <img src={Cruise}></img>
            <p>Free Shipping</p>
          </div>
          <div className="maindesc-div">
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              labore nisi quisquam perferendis blanditiis cumque minima velit
              corrupti, temporibus quo.
            </p>
          </div>
        </Grid>
        <Grid item md={3} xs={6}>
          <div className="maindesc-second">
            <img src={Wallet}></img>
            <p>Buy now, small price!</p>
          </div>
          <div className="maindesc-div">
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              labore nisi quisquam perferendis blanditiis cumque minima velit
              corrupti, temporibus quo.
            </p>
          </div>
        </Grid>
        <Grid item md={3} xs={6}>
          <div className="maindesc-third">
            <img src={Refund}></img>
            <p>Cashback Rewards!</p>
          </div>
          <div className="maindesc-div">
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              labore nisi quisquam perferendis blanditiis cumque minima velit
              corrupti, temporibus quo.
            </p>
          </div>
        </Grid>
        <Grid item md={3} xs={6}>
          <div className="maindesc-fourth">
            <img src={CreditCard}></img>
            <p>Secure as always!</p>
          </div>
          <div className="maindesc-div">
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              labore nisi quisquam perferendis blanditiis cumque minima velit
              corrupti, temporibus quo.
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainDescription;
