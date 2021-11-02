import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  eventPlacePrice: {
    display: "flex",
    flexDirection: "row",
    fontSize: "12px",
    color: theme.palette.text.secondary,
    alignItems: "center",
    fontWeight: 500,
  },
  icon: {
    height: "12px",
    width: "12px",
  },
  iconContainer: {
    height: "12px",
    width: "12px",
  },
  placeText: {
    marginLeft: "8px",
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(100% - 100px)'
  },
  priceText: {
    margin: "0px 8px 0px auto",
  },
}));

export default useStyles;
