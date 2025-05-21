import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MaterialThemeProvider } from "./components/ui/MaterialProvider/MaterialProvider.tsx";
import { GlobalLayout } from "@/layouts/GlobalLayout/GlobalLayout.tsx";
import "./main.css";
// const Router = (

// );

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MaterialThemeProvider bg="surface_container">
      <GlobalLayout />
    </MaterialThemeProvider>
  </StrictMode>
);
