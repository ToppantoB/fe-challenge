import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
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
  grid: {
    height: "calc(100vh - 75px)",
    overflowY: "scroll",
    padding: "0px 20px",
    "@media (max-width: 944px)": {
      padding: "0px 0px",
    },
    "@media (max-width: 671px)": {
      height: "calc(100vh - 135px)",
    },
  },
});

export default useStyles;
