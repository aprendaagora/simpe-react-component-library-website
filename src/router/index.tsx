import { createBrowserRouter } from "react-router-dom";
import RootPage from "./routes/RootPage";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";

import AboutPage from "./routes/AboutPage";
import AtomsPage from "./routes/AtomsPage";
import MoleculesPage from "./routes/MoleculesPage";
import OrganismsPage from "./routes/OrganismsPage";
import HeadingPage from "./routes/atoms/HeadingPage";
import ButtonPage from "./routes/atoms/ButtonPage";
import BadgePage from "./routes/atoms/BadgePage";
import InputPage from "./routes/atoms/InputPage";
import NavbarPage from "./routes/organisms/NavbarPage";
import SidemenuPage from "./routes/organisms/SidemenuPage";
import TablePage from "./routes/organisms/TablePage";
import AlertPage from "./routes/molecules/AlertPage";
import ListPage from "./routes/molecules/ListPage";
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
      {
        path: "atoms",
        children: [
          {
            path: "",
            element: <AtomsPage />,
          },
          {
            path: "badge",
            element: <BadgePage />,
          },
          {
            path: "input",
            element: <InputPage />,
          },
          {
            path: "heading",
            element: <HeadingPage />,
          },
          {
            path: "button",
            element: <ButtonPage />,
          },
        ],
      },
      {
        path: "molecules",
        children: [
          {
            path: "",
            element: <MoleculesPage />,
          },
          {
            path: "alert",
            element: <AlertPage />,
          },
          {
            path: "list",
            element: <ListPage />,
          },
        ],
      },
      {
        path: "organisms",
        children: [
          {
            path: "",
            element: <OrganismsPage />,
          },
          {
            path: "navbar",
            element: <NavbarPage />,
          },
          {
            path: "sidemenu",
            element: <SidemenuPage />,
          },
          {
            path: "table",
            element: <TablePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
