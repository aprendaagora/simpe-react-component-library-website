import {
  Heading,
  Sidemenu,
} from "@aprendaagora/simple-react-component-library";
import React from "react";
import ComponentExample from "../../../components/ComponentExample";

const code1 = `const menuSections = [
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

<Sidemenu menuSections={menuSections} />`;

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
      <Heading level={3} text="Sidemenu" tailwind="mb-5" />

      <ComponentExample
        heading="Sidemenu"
        Component={<Sidemenu menuSections={menuSections} />}
        code={code1}
      />
    </div>
  );
};

export default SidemenuPage;
