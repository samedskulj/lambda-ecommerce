import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2d3436",
    },
  },
});

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  appbarFont: {
    textTransform: "uppercase",
  },

  btnlogin: {
    paddingRight: theme.spacing(1),
  },
  footer: {
    textAlign: "center",
  },
  main: {
    marginBottom: theme.spacing(4),
  },
  headerMargin: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 300,
  },
  cardContent: {
    display: "flex",

    justifyContent: "space-between",
  },
  textRating: {
    marginLeft: "15px",
  },
  descContent: {
    height: 210,
  },
  desc: {
    height: "100%",
  },
  linkovi: {
    textDecoration: "none",
    color: "inherit",
  },
  gridImg: {
    width: "100%",
  },
  grid3RatingName: {
    padding: "10px 30px",
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  list: {
    width: "100%",
    border: "2px solid green",
  },
  listItemFlex: {
    display: "flex",
    padding: "20px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
}));
