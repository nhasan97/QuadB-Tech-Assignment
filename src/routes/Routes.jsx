import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import ShowSummery from "../pages/ShowSummery/ShowSummery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/show-summery/:id",
        element: <ShowSummery></ShowSummery>,
      },
    ],
  },
]);

export default router;
