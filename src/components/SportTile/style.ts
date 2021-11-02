import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  tile: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 944px)": {
      borderRadius: "0px",
      borderWidth: "0px",
      borderBottomWidth: "1px",
    },
  },
  coverImage: {
    height: "148px",
    width: "148px",
    objectFit: "cover",
    verticalAlign: "middle",
    marginRight: "16px",

    "@media (max-width: 1269px)": {
      display: "none",
    },
  },
  details: {
    fontFamily: "SF-Pro-Text, Arial, serif",
    fontSize: "12px",
    width: "100%",
    overflow: "hidden",
  },
  title: {
    fontSize: "18px",
    lineHeight: "21px",
    margin: "0px 0px 8px 0px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
  },
  spotsAndDate: {
    display: "flex",
    flexDirection: "row",
    whiteSpace: "pre",
    lineHeight: "14px",
    marginBottom: "8px",
  },
  openSpots: {
    marginRight: "20px",
  },
  mediumText: {
    fontWeight: 500,
  },
  greyText: {
    color: theme.palette.text.secondary,
  },
  sportAndReviews: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "12px",
  },
  reviews: {
    marginLeft: "16px",
    heigth: "22px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    alignItems: "center",
    display: "flex",
    marginLeft: "4px",
  },
  venue: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "16px",
  },
  venueImage: {
    height: "30px",
    width: "30px",
    borderRadius: "15px",
    objectFit: "cover",
    verticalAlign: "middle",
    margin: "0px 8px 0px 8px",
    border: `0.5px solid ${theme.palette.secondary.main}`,
  },
  venueName: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: 'hidden'
  },
  redText: {
    color: 'red'
  }
}));

export default useStyles;
