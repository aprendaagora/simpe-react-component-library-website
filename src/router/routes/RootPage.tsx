import { Button } from "@aprendaagora/simple-react-component-library";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidemenu from "../../components/Sidemenu";
import { SiReact } from "react-icons/si";

const RootPage = () => {
  const sidemenuRoutes = [
    { route: "/", text: "Home" },
    { route: "about", text: "About" },
  ];
  const navbarRoutes = [
    { route: "/", text: "Home" },
    { route: "about", text: "About" },
  ];

  return (
    <div>
      <Navbar
        routes={navbarRoutes}
        Logo={<SiReact className="animate-spin-slow" color="white" size={24} />}
      />
      <div className="flex">
        <Sidemenu
          menuSections={[{ routes: sidemenuRoutes, heading: "Components" }]}
        />
        <main className="p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootPage;
