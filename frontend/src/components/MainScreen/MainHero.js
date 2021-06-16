import React from "react";
import "../../sass/mainscreen.scss";
import { Grid, Button } from "@material-ui/core";
import MainHeroImg from "../../images/reynier-carl-wf0c0d-h2fE-unsplash.jpg";
import useStyles from "../../material-styles/mainstyles";
const MainHero = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className="main-grid"
        alignItems="center"
        justify="flex-start"
      >
        <Grid item md={6} xs={12}>
          <div className="main-hero-first-paragraph">
            <p>see</p>
            <p>buy</p>
            <p>game.</p>
          </div>
          <div className="main-hero-second-paragraph">
            <h2>Lambda</h2>
            <p>
              Tech store for your gaming PC or console. Buy good things for
              small price. You don't believe? Well, check it out!
            </p>
          </div>
          <div>
            <Button
              className={classes.btnColor}
              variant="outlined"
              color="primary"
            >
              Shop now!
            </Button>
          </div>
        </Grid>
      </Grid>

      <div className="main-hero-img-div">
        <img className="mainheroimg" src={MainHeroImg}></img>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
          <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="mainherosvg">
              <path
                class="cls-1"
                d="M0,0V.66H0C0,.85.23,1,.5,1S1,.84,1,.65H1V0Z"
              />
              <path d="M1,0H0V.66H0C0,.85.23,1,.5,1S1,.84,1,.65H1V0Z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default MainHero;
