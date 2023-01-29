import DetailCarPage from "../pages/DetailCarPage";
import HomePage from "../pages/HomePage";
import LikesPage from "../pages/LikesPage";
import NotFoundPage from "../pages/NotFoundPage";
import RentalPage from "../pages/RentalPage";
import SearchPage from "../pages/SearchPage";
import SignInPage from "../pages/SignInPage";


const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/likes", element: <LikesPage /> },
  { path: "/cars", element: <SearchPage /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/rental/:name/:id", element: <RentalPage /> },
  { path: "/car/:name/:id", element: <DetailCarPage /> },
  { path: "*", element: <NotFoundPage /> },
]

export default routes