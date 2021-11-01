import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  chip: {
    height: "22px",
    width: "90px",
    lineHeight: "14px",
    borderRadius: "8px",
    fontSize: "12px",
    color: "black",
		fontWeight: 400,
    backgroundColor: "#EDEDED",
    padding: "0px 8px 0px 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
  },
  iconContainer: {
    height: "13px",
    position: "absolute",
    right: "8px",
  },
}));

export default useStyles;
