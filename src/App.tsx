import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { kudosTheme, KudosRtlPlugin, KudosGlobalStyle } from "./styles/theme";
import { CacheProvider } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import { Layout } from "./components/Layout";
import AuthenticationPage from "./pages/Authentication";

const App = (): JSX.Element => {
  return (
    <CacheProvider value={KudosRtlPlugin}>
      <ThemeProvider theme={kudosTheme}>
        <CssBaseline />
        <GlobalStyles styles={KudosGlobalStyle} />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />} path="/">
              <Route index element={<HomePage />} />
            </Route>
            <Route path="/authentication" element = {<AuthenticationPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
