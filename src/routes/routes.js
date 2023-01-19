import DetailCarPage from "../pages/DetailCarPage";
import HomePage from "../pages/HomePage";
import LikesPage from "../pages/LikesPage";
import SearchPage from "../pages/SearchPage";


const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/likes", element: <LikesPage /> },
  { path: "/cars", element: <SearchPage /> },
  { path: "/car/:name/:id", element: <DetailCarPage /> },
]

export default routes