import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login/Login";
import Registration from "../Shared/Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Registration></Registration>
        }    
      ],
    },
  ]);

  export default router;