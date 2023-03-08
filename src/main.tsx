import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./App";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Home />
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
