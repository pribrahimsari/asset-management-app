import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Query can also be used with React's Suspense for Data Fetching API's with its fallbacks
const client = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      {/* todo: better fallback for whole app */}
      <React.Suspense fallback="Loading...">
        <App />
      </React.Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
