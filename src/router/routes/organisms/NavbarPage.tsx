import {
  Button,
  Heading,
  Navbar,
} from "@aprendaagora/simple-react-component-library";
import React from "react";
import ComponentExample from "../../../components/ComponentExample";

const NavbarPage = () => {
  const routes = [
    { route: "organisms/navbar", text: "Tab 1" },
    { route: "organisms/navbar", text: "Tab 2" },
    { route: "organisms/navbar", text: "Tab 3" },
  ];

  const code1 = `<Navbar
  Logo={<Button text="Logo" />}
/>`;
  return (
    <div className="w-full">
      <Heading level={3} text="Navbar" tailwind="mb-5" />

      <ComponentExample
        heading="Navbar with Button logo"
        Component={
          <Navbar
            Logo={<Button text="Logo" />}
            renderItem={(item) => <span>{item}</span>}
          />
        }
        code={code1}
      />
    </div>
  );
};

export default NavbarPage;
