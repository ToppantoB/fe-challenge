import { createTheme } from "@mui/material/styles";

const AppTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
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
