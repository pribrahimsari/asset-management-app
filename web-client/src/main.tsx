import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import "@fontsource/inter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AssetContextProvider } from "src/context/AssetContext.tsx";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { StyledEngineProvider } from "@mui/joy/styles";
import { SnackbarProvider } from "notistack";
import SnackbarCloseButton from "src/components/SnackbarCloseButton.tsx";

// React Query can also be used with React's Suspense for Data Fetching API's with its fallbacks
const client = new QueryClient({
  // commented this line, since changing sort config cause suspense mode for full screen
  // todo: fix if you have time
  // defaultOptions: { queries: { suspense: true } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <SnackbarProvider
        autoHideDuration={3000}
        preventDuplicate
        action={(snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <React.Suspense fallback="Loading...">
          <AssetContextProvider>
            <StyledEngineProvider injectFirst>
              <CssVarsProvider>
                <CssBaseline />
                <App />
              </CssVarsProvider>
            </StyledEngineProvider>
          </AssetContextProvider>
        </React.Suspense>
      </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
