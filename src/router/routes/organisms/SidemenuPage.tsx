import {
  Heading,
  Sidemenu,
} from "@aprendaagora/simple-react-component-library";
import React from "react";

const SidemenuPage = () => {
  const menuSections = [
    {
      heading: "Heading of Section",
      routes: [
        { route: "", text: "Route 1" },
        { route: "", text: "Route 2" },
        { route: "", text: "Route 3" },
      ],
      renderItem: (item: any) => <span>{item.text}</span>,
    },
  ];
  return (
    <div>
      <Heading level={3} text="Sidemenu Component" />
      <Sidemenu menuSections={menuSections} />
    </div>
  );
};

export default SidemenuPage;
