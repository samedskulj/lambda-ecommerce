import React from "react";
import useStyles from "../../material-styles/mainstyles";
import "../../sass/mainscreen.scss";
import { Grid, Button } from "@material-ui/core";
import MainTwoAdFirst from "../../images/jose-g-ortega-castro-2mE5DJJmW-Q-unsplash.jpg";
import MainTwoAdSecond from "../../images/bantersnaps-hjE-gcjs0Gs-unsplash.jpg";
const MainTwoAd = () => {
  return (
    <>
      <Grid container>
        <Grid item md={6} xs={12} className="maintwoad-first-part">
          <div className="maintwoad-img-first">
            <img src={MainTwoAdFirst}></img>
          </div>
          <div className="maintwoad-first-paragraph">
            <p>Collection</p>
            <h2>Online Exclusive</h2>
          </div>
        </Grid>
        <Grid item md={6} xs={12} className="maintwoad-second-part">
          <div className="maintwoad-img-second">
            <img src={MainTwoAdSecond}></img>
          </div>
          <div className="maintwoad-first-paragraph">
            <p>Sale Up To</p>
            <h2>30% OFF</h2>
            <p>ON SELECTED ITEMS</p>
            <p>Hurry Up! Limited time offer!</p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainTwoAd;
