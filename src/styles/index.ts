import { createTheme } from "@mui/material/styles";

const AppTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 670,
      md: 945,
      lg: 1270,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#21A696",
    },
    text: {
      primary: "#333333",
      secondary: "#808080",
    },
  },
});

export default AppTheme;
