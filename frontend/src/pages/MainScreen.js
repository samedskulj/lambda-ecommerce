import React from "react";
import { Container, Grid, Button } from "@material-ui/core";
import useStyles from "../material-styles/mainstyles";
import MainHeader from "../components/MainScreen/MainHeader";
import MainHero from "../components/MainScreen/MainHero";
const MainScreen = () => {
  const classes = useStyles();
  return (
    <>
      <MainHeader></MainHeader>
      <Container>
        <MainHero></MainHero>
      </Container>
    </>
  );
};

export default MainScreen;
