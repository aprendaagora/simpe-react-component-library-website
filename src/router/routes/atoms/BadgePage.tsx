import { Badge, Heading } from "@aprendaagora/simple-react-component-library";
import React from "react";

const BadgePage = () => {
  return (
    <div className="flex flex-col">
      <Heading level={3} text="Badge Component" />
      <Badge
        text="Regular badge"
        bgColor="blue"
        clickFunction={() => alert("Hello")}
      />

      <hr />

      <Badge
        text="Badge with 1 digit count"
        count={1}
        bgColor="gray"
        clickFunction={() => alert("Hello")}
      />

      <hr />

      <Badge
        text="Badge with count"
        count={50}
        bgColor="gray"
        clickFunction={() => alert("Hello")}
      />

      <hr />

      <Badge
        text="Badge with count over 99"
        count={100}
        bgColor="gray"
        clickFunction={() => alert("Hello")}
      />
    </div>
  );
};

export default BadgePage;
