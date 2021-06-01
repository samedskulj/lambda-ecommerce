import { Grid } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "../material-styles/styles";
import Rating from "./Rating";
const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.rootCard}>
        <CardActionArea className={classes.cardAction}>
          <a href={`/product/${product._id}`}>
            <CardMedia
              className={classes.media}
              image={product.image}
              title="Contemplative Reptile"
            />
          </a>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </CardContent>
          <CardContent className={classes.cardContent}>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.brand}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.category}
            </Typography>
          </CardContent>
          <CardContent className={classes.ratingContent}>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {product.brand}
          </Button>
          <Button size="small" color="primary">
            {product.category}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
