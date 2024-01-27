import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/Root";
import ErrorPage from "./routes/404";
import HomePage from "./routes/Home";
import ApplyPage from "./routes/Apply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/apply",
    element: <ApplyPage />,
  },
  {
    path: "/get-involved",
    element: <ApplyPage />,
  },
]);

export default router;
