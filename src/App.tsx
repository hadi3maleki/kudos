import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { kudosTheme, KudosRtlPlugin, KudosGlobalStyle } from "./styles/theme";
import { CacheProvider } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import { Layout } from "./components/Layout";
import AuthenticationPage from "./pages/Authentication";
import { QueryClientProvider } from "react-query";
import { QueryClientStore } from "./services/queries/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from 'react-hot-toast';

const App = (): JSX.Element => {
  console.log(process.env.QUERA_API_URL);
  console.log(process.env);
  return (
    <QueryClientProvider client={QueryClientStore}>
      <CacheProvider value={KudosRtlPlugin}>
        <ThemeProvider theme={kudosTheme}>
          <CssBaseline />
          <GlobalStyles styles={KudosGlobalStyle} />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />} path="/">
                <Route index element={<HomePage />} />
              </Route>
              <Route
                path="/authentication"
                element={<AuthenticationPage />}
              ></Route>
            </Routes>
            <ReactQueryDevtools initialIsOpen={false} />
          </BrowserRouter>
          <Toaster />
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default App;
