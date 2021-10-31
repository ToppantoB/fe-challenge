import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    /*    "@media (min-width: 1200px)": {
      maxWidth: "1200px",
    }, */
  },
  filterBar: {
    width: "237px",
    minWidth: "237px",
    maxWidth: "237px",
    height: "100vh",
    boxShadow: "1px 0px 2px rgba(0, 0, 0, 0.16)",
    padding: "34px 0px 0px 21px",
  },
  gridPlusSearch: {
    width: "100%",
  },
  search: {
    height: "75px",
    width: "100%",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.16)",
  },
  grid: { padding: "0px 20px" },
});

export default useStyles;
