import { Heading, List } from "@aprendaagora/simple-react-component-library";
import React from "react";

const ListPage = () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <Heading level={3} text="List Component" />
      <List items={items} renderItem={(item) => <span>{item}</span>} />
    </div>
  );
};

export default ListPage;
