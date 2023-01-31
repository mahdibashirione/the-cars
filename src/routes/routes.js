import { createBrowserRouter } from "react-router-dom";
import DetailCarPage from "../pages/DetailCarPage";
import HomePage from "../pages/HomePage";
import LikesPage from "../pages/LikesPage";
import NotFoundPage from "../pages/NotFoundPage";
import RentalPage from "../pages/RentalPage";
import SearchPage from "../pages/SearchPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";


const routes = [
  { id: 1, path: "/", element: <HomePage /> },
  { id: 2, path: "/likes", element: <LikesPage /> },
  { id: 3, path: "/cars", element: <SearchPage /> },
  { id: 4, path: "/sign-in", element: <SignInPage /> },
  { id: 4, path: "/sign-up", element: <SignUpPage /> },
  { id: 5, path: "/rental/:name/:id", element: <RentalPage /> },
  { id: 6, path: "/car/:name/:id", element: <DetailCarPage /> },
  { id: 7, path: "*", element: <NotFoundPage /> },
]

export default routes