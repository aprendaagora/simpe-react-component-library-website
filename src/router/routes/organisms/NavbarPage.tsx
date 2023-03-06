import {
  Button,
  Heading,
  Navbar,
} from "@aprendaagora/simple-react-component-library";
import React from "react";

const NavbarPage = () => {
  const routes = [
    { route: "", text: "Tab 1" },
    { route: "", text: "Tab 2" },
    { route: "", text: "Tab 3" },
  ];
  return (
    <div>
      <Heading level={3} text="Navbar Component" />
      <Navbar
        Logo={<Button text="Logo" />}
        renderItem={(item) => <span>{item}</span>}
      />
    </div>
  );
};

export default NavbarPage;
