import { createBrowserRouter } from "react-router-dom";
import RootPage from "./routes/RootPage";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";

import AboutPage from "./routes/AboutPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
