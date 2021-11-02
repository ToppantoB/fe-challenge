import "./App.css";
import ActivitySearch from "./views/ActivitySearchView";
import { ThemeProvider } from "@mui/material";
import AppTheme from "./styles";

// Considering the current complexity of the app, this file could be skipped and moved to index.tsx
// but keeping a larger application in mind, these files would get more complicated, so I kept them separated

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <ActivitySearch />
    </ThemeProvider>
  );
}

export default App;
