import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SingleCard from "../components/SingleCard";
import ErrorPage from "../Pages/ErrorPage";
import PrivetRout from "../PrivetRout/PrivetRout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/datas.json"),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivetRout>
            <UpdateProfile></UpdateProfile>
          </PrivetRout>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivetRout>
            <About></About>
          </PrivetRout>
        ),
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: "/singleCard/:id",
        element: (
          <PrivetRout>
            <SingleCard></SingleCard>
          </PrivetRout>
        ),
        loader: () => fetch("/datas.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
