import DetailCarPage from "../pages/DetailCarPage";
import HomePage from "../pages/HomePage";
import LikesPage from "../pages/LikesPage";
import NotFoundPage from "../pages/NotFoundPage";
import RentalPage from "../pages/RentalPage";
import SearchPage from "../pages/SearchPage";


const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/likes", element: <LikesPage /> },
  { path: "/cars", element: <SearchPage /> },
  { path: "/rental/:name/:id", element: <RentalPage /> },
  { path: "/car/:name/:id", element: <DetailCarPage /> },
  { path: "*", element: <NotFoundPage /> },
]

export default routes