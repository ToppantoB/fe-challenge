import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  rating: {
    height: "20px",
    display: "flex",
    alignItems: "center",

    "& .MuiRating-sizeMedium": {
      "& .MuiRating-decimal": {
        width: "16px",
        height: "16px",
      },
      "& .MuiRating-visuallyHidden": {
        width: "7px",
      },

      "& .MuiRating-icon": {
        width: "16px",
      },
    },
  },
}));

export default useStyles;
