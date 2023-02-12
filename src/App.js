import { StyledEngineProvider } from "@mui/material";
import React from "react";
import { Routes, Route, RouterProvider } from "react-router-dom"
import routes from "./routes/routes";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Routes>
        {routes.map(route => <Route key={route.id} {...route} />)}
      </Routes>
    </StyledEngineProvider>
  );
}

export default App;
