import { Routes, Route } from "react-router-dom"
import routes from "./routes/routes";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => <Route key={index * 1.75} {...route} />)}
    </Routes>
  );
}

export default App;
