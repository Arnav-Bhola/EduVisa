import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/Root";
import ErrorPage from "./routes/404";
import HomePage from "./routes/Home";
import GetInvolved from "./routes/GetInvolved";
import ApplyPage from "./redirects/Apply";
import DonatePage from "./redirects/Donate";
import Discord from "./redirects/Discord";
import EventsCalendar from "./redirects/EventsCalendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/get-involved",
        element: <GetInvolved />,
      },
    ],
  },
  {
    path: "/apply",
    element: <ApplyPage />,
  },

  { path: "/donate", element: <DonatePage /> },
  { path: "/discord", element: <Discord /> },
  { path: "/events", element: <EventsCalendar /> },
  { path: "/calendar", element: <EventsCalendar /> },
  { path: "/eventscalendar", element: <EventsCalendar /> },
  { path: "/events-calendar", element: <EventsCalendar /> },
]);

export default router;
