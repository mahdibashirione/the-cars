import React from "react";
import { Routes, Route, RouterProvider } from "react-router-dom"
import routes from "./routes/routes";

function App() {
  return (
    <Routes>
      {routes.map(route => <Route key={route.id} {...route} />)}
    </Routes>
  );
}

export default App;
