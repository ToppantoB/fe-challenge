import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  chip: {
    height: "22px",
    lineHeight: "14px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: 500,
    color: theme.palette.text.secondary,
    backgroundColor: "#EDEDED",
    padding: "0px 8px 0px 8px",
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
