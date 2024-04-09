import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import UserProfile from "../Pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('datas.json')
        },
        {
            path: '/updateProfile',
            element: <UpdateProfile></UpdateProfile>
        },
        {
          path: '/userProfile',
          element: <UserProfile></UserProfile>
        }
    ]
  },
]);

export default router;