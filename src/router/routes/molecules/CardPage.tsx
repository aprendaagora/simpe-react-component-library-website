import { Heading, Card } from "@aprendaagora/simple-react-component-library";
import React from "react";
import ComponentExample from "../../../components/ComponentExample";

const code1 = `<Card
  heading="This is a card"
  description="This is a description"
  tailwind="w-[500px]"
/>`;

const CardPage = () => {
  return (
    <div>
      <Heading level={3} text="Card" tailwind="mb-5" />

      <ComponentExample
        heading="Card with width 500px"
        Component={
          <Card
            heading="This is a card"
            description="This is a description"
            tailwind="w-[500px]"
          />
        }
        code={code1}
      />
    </div>
  );
};

export default CardPage;
