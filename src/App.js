import { Routes, Route } from "react-router-dom"
import routes from "./routes/routes";

function App() {
  return (
    <Routes>
      {routes.map(route => <Route {...route} />)}
    </Routes>
  );
}

export default App;
