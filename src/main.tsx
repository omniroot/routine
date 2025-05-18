import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Switch } from "wouter";
import "./index.css";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { MaterialThemeProvider } from "./components/material/MaterialProvider.tsx";

// const Router = (

// );

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MaterialThemeProvider>
      <Switch>
        <Route path={"/"} component={HomePage} />
        <Route path={"/settings"} component={SettingsPage} />
      </Switch>
    </MaterialThemeProvider>
  </StrictMode>
);
