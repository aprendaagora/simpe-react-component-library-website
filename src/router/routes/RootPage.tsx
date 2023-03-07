import { Link, Outlet } from "react-router-dom";
import {
  Navbar,
  Sidemenu,
  Button,
} from "@aprendaagora/simple-react-component-library";
import { SiReact } from "react-icons/si";

const RootPage = () => {
  const atomsRoutes = [
    { route: "atoms/badge", text: "Badge" },
    { route: "atoms/button", text: "Button" },
    { route: "atoms/heading", text: "Heading" },
    { route: "atoms/input", text: "Input" },
  ];

  const moleculesRoutes = [
    { route: "molecules/alert", text: "Alert" },
    { route: "molecules/list", text: "List" },
    { route: "molecules/card", text: "Card" },
    { route: "molecules/jumbotron", text: "Jumbotron" },
    { route: "molecules/collapsible", text: "Collapsible" },
  ];

  const organismsRoutes = [
    { route: "organisms/navbar", text: "Navbar" },
    { route: "organisms/sidemenu", text: "Sidemenu" },
    { route: "organisms/table", text: "Table" },
  ];
  const menuSections = [
    {
      routes: atomsRoutes,
      heading: "Atoms",
      renderItem: (item: any) => <Link to={item.route}>{item.text}</Link>,
    },
    {
      routes: moleculesRoutes,
      heading: "Molecules",
      renderItem: (item: any) => <Link to={item.route}>{item.text}</Link>,
    },
    {
      routes: organismsRoutes,
      heading: "Organisms",
      renderItem: (item: any) => <Link to={item.route}>{item.text}</Link>,
    },
  ];

  const navbarRoutes = [{ route: "/", text: "Home" }];

  return (
    <div>
      <Navbar
        routes={navbarRoutes}
        Logo={
          <Link to="/">
            <SiReact className="animate-spin-slow" color="white" size={24} />
          </Link>
        }
        renderItem={(item) => <Link to={item.route}>{item.text}</Link>}
      />
      <div className="flex">
        <Sidemenu menuSections={menuSections} />
        <main className="p-20 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootPage;
