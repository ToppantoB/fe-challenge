import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    overflowY: "hidden",
    "@media (min-width: 1550px)": {
      maxWidth: "1550px",
    },
  },
  filterBar: {
    width: "237px",
    minWidth: "237px",
    height: "100vh",
    boxShadow: "1px 0px 2px rgba(0, 0, 0, 0.16)",
    padding: "34px 21px 0px 20px",
    boxSizing: "border-box",
    "@media (max-width: 670px)": {
      display: "none",
    },
  },
  mobilHeader: {
    display: "flex",
    justifyContent: "center",
    padding: "9px 0px",
    height: "60px",
    boxSizing: "border-box",
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
    "@media (min-width: 671px)": {
      display: "none",
    },
  },
  gridPlusSearch: {
    width: "100%",
    height: "100vh",
    overflowY: "hidden",
  },
  search: {
    height: "75px",
    width: "100%",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.16)",
  },
  gridTitle: {
    fontSize: "24px",
    fontWeight: 600,
    margin: "28px 0 8px 0px",
    "@media (max-width: 944px)": {
      margin: "28px 16px 8px 16px",
    },
  },
  gridSubtitle: {
    color: theme.palette.text.secondary,
    margin: "0 0 32px 0",
    fontSize: "14px",
    lineHeight: "22px",
    "@media (max-width: 944px)": {
      margin: "0 0 0 0",
      padding: "0 16px 32px 16px",

      borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
  },
  grid: {
    fontFamily: "SF-Pro-Text, Arial, serif",
    height: "calc(100vh - 75px)",
    overflowY: "scroll",
    padding: "0px 20px",
    "@media (max-width: 944px)": {
      padding: "0px 0px",
    },
    "@media (max-width: 671px)": {
      height: "calc(100vh - 135px)",
    },

    "&::-webkit-scrollbar": {
      width: "15px",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: theme.palette.secondary.main,
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: theme.palette.text.secondary,
    },
  },
}));

export default useStyles;
