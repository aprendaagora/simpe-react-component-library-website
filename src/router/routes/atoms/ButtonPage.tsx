import { Button, Heading } from "@aprendaagora/simple-react-component-library";
import React from "react";
import ComponentExample from "../../../components/ComponentExample";

const ButtonPage = () => {
  return (
    <div className="flex flex-col">
      <Heading level={3} text="Button" tailwind="mb-5" />

      <ComponentExample
        heading="Primary button"
        Component={<Button type="primary" text="Primary" />}
        code={`<Button type="primary" text="Primary" />`}
      />

      <ComponentExample
        heading="Success button"
        Component={<Button type="success" text="Success" />}
        code={`<Button type="success" text="Success" />`}
      />

      <ComponentExample
        heading="Danger button"
        Component={<Button type="danger" text="Danger" />}
        code={`<Button type="danger" text="Danger" />`}
      />

      <ComponentExample
        heading="Secondary button"
        Component={<Button type="secondary" text="Secondary" />}
        code={`<Button type="secondary" text="Secondary" />`}
      />

      <ComponentExample
        heading="Light button"
        Component={<Button type="light" text="Light" />}
        code={`<Button type="light" text="Light" />`}
      />

      <ComponentExample
        heading="Dark button"
        Component={<Button type="dark" text="Dark" />}
        code={`<Button type="dark" text="Dark" />`}
      />
    </div>
  );
};

export default ButtonPage;
