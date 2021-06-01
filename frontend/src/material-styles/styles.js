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
    height: "150vh",
  },
  media: {
    height: 300,
  },
  cardContent: {
    display: "flex",

    justifyContent: "space-between",
  },
  ratingContent: {},
  textRating: {
    marginLeft: "15px",
  },
}));
