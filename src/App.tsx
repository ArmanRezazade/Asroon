import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import UserInfoPage from "./pages/UserInfoPage";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { 500: "#a10000" },
  },
  typography: {
    fontFamily: "Neucha",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="Insert" element={<UserInfoPage key="Insert" />} />
          <Route path="Edit" element={<UserInfoPage key="Edit" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
