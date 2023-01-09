import DetailCarPage from "../pages/DetailCarPage";
import HomePage from "../pages/HomePage";


const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/car/:name/:id", element: <DetailCarPage /> },
]

export default routes