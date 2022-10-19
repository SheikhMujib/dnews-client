import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories/:id",
        element: <Categories></Categories>,
      },
      {
        path: "/news/:id",
        element: <News></News>,
      },
    ],
  },
]);
