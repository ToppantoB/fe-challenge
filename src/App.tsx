import "./App.css";
import ActivitySearch from "./views/ActivitySearchView";
import { ThemeProvider } from "@mui/material";
import AppTheme from "./styles";

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <div className="App">
        <ActivitySearch />
      </div>
    </ThemeProvider>
  );
}

export default App;
