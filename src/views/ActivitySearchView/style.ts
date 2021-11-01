import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    overflowY: "hidden",
    /*    "@media (min-width: 1200px)": {
      maxWidth: "1200px",
    }, */
  },
  filterBar: {
    width: "237px",
    minWidth: "237px",
    height: "100vh",
    boxShadow: "1px 0px 2px rgba(0, 0, 0, 0.16)",
    padding: "34px 21px 0px 20px",
    boxSizing: "border-box",
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
  },
});

export default useStyles;
