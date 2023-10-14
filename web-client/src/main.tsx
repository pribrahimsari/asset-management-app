import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/inter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AssetContextProvider } from "src/context/AssetContext.tsx";
import { CssBaseline, CssVarsProvider } from "@mui/joy";

// React Query can also be used with React's Suspense for Data Fetching API's with its fallbacks
const client = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      {/* todo: better fallback for whole app */}
      <React.Suspense fallback="Loading...">
        <CssVarsProvider>
          <AssetContextProvider>
            <CssBaseline />
            <App />
          </AssetContextProvider>
        </CssVarsProvider>
      </React.Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
