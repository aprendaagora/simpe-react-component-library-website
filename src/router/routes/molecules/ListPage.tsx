import { Heading, List } from "@aprendaagora/simple-react-component-library";
import React from "react";
import ComponentExample from "../../../components/ComponentExample";

const code1 = ` const items = ["Item 1", "Item 2", "Item 3"];

<List items={items} renderItem={(item) => <span>{item}</span>} />`;

const ListPage = () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <Heading level={3} text="List" tailwind="mb-5" />

      <ComponentExample
        heading="List"
        Component={
          <List items={items} renderItem={(item) => <span>{item}</span>} />
        }
        code={code1}
      />
    </div>
  );
};

export default ListPage;
