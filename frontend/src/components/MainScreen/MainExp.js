import React from "react";
import useStyles from "../../material-styles/mainstyles";
import "../../sass/mainscreen.scss";
import { Grid, Button } from "@material-ui/core";
import MainExpImg from "../../images/florian-krumm-1osIUArK5oA-unsplash (1).jpg";
import { Link } from "react-router-dom";
const MainExp = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className="mainexp-container">
        <Grid item md={6} xs={12}>
          <div className="mainexp-div-img">
            <img src={MainExpImg}></img>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className="mainexp-title">
            <p>EST 2021</p>
            <h2>How we started?</h2>
          </div>
          <div className="mainexp-description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              nihil perspiciatis ad, nostrum laborum officia. Quae distinctio
              esse reprehenderit voluptates, sunt quasi nam suscipit, veniam
              laborum ipsa minima autem in maiores recusandae porro libero
              nostrum rerum. Tempore tenetur explicabo delectus at veniam
              dolorum veritatis eaque esse magnam laudantium repudiandae vero
              quam numquam quasi in consequuntur repellat voluptatibus vel,
              obcaecati ad eum. Perspiciatis, obcaecati! Rerum tempore itaque
              consectetur hic sequi iusto minima, consequuntur blanditiis a,
              dolorum tempora molestiae commodi aut odit?
            </p>
          </div>
          <Link className={classes.linkovi} to="/main">
            <Button variant="outlined" color="primary">
              Shop now!
            </Button>
          </Link>
        </Grid>
      </Grid>
      {/*SVG Clip Path*/}
      <svg>
        <defs></defs>
        <clipPath clipPathUnits="objectBoundingBox" id="mainexpsvg">
          <path
            class="cls-1"
            d="M1,.22C1,.1.78,0,.5,0S0,.1,0,.22V.77H0C0,.9.22,1,.5,1S1,.9,1,.78H1Z"
          />
          <path d="M.5,0C.22,0,0,.1,0,.22V.77H0C0,.9.22,1,.5,1S1,.9,1,.78H1V.22C1,.1.78,0,.5,0Z" />
        </clipPath>
      </svg>
    </>
  );
};

export default MainExp;
