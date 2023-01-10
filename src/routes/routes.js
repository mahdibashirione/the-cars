import DetailCarPage from "../pages/DetailCarPage";
import HomePage from "../pages/HomePage";
import LikesPage from "../pages/LikesPage";


const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/likes", element: <LikesPage /> },
  { path: "/car/:name/:id", element: <DetailCarPage /> },
]

export default routes