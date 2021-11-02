import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  formContainer: {
    "@media (max-width: 669px)": {
      whiteSpace: "nowrap",
      overflowY: "scroll",
    },
  },
  mobileMenu: {
    display: "inline-flex",
    height: "72px",
    alignItems: "center",
    marginLeft: "8px",
    "@media (min-width: 671px)": {
      display: "none",
    },

    "& .MuiIconButton-root": {
      border: '1px solid #DDDDDD',
      boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
    },
  },
}));

export default useStyles;
