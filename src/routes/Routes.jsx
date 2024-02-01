import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import ShowSummery from "../pages/ShowSummery/ShowSummery";
import TicketBookingForm from "../pages/TicketBookingForm/TicketBookingForm";

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
      {
        path: "/book-ticket/:id",
        element: <TicketBookingForm></TicketBookingForm>,
      },
    ],
  },
]);

export default router;
