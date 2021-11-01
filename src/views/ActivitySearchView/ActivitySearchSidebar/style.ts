import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    margin: "0px 0px 8px 0px",
    color: theme.palette.text.secondary,
    fontSize: "12px",
  },
  radioButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "SF-Pro-Text, Arial, serif",
    "&:hover": {
      cursor: "pointer",
    },
  },
  priceDisplayContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "16px",
    marginBottom: "16px",
		borderBottom: '1px solid #DDDDDD'
  },
  priceDisplay: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  priceFilterLabel: {
    color: "black",
    fontSize: "12px",
    marginBottom: "8px",
  },
  upText: {
    marginLeft: "4px",
  },
}));

export default useStyles;