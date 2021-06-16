import React from "react";
import useStyles from "../../material-styles/mainstyles";
import "../../sass/mainscreen.scss";
import { Grid, Button } from "@material-ui/core";
import MainAdImg from "../../images/fazly-shah-Ei5d39YRrgY-unsplash.jpg";
const MainAd = () => {
  return (
    <>
      <Grid container className="mainad-container">
        <Grid item md={12} xs={12} className="mainad-grid-row">
          <div className="mainad-div-img">
            <img src={MainAdImg}></img>
          </div>
          <div className="mainad-paragraph">
            <p>You want to buy a new PC?</p>
            <h2>If not now, when?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainAd;
