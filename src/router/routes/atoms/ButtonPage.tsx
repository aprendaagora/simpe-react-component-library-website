import { Button, Heading } from "@aprendaagora/simple-react-component-library";
import React from "react";

const ButtonPage = () => {
  return (
    <div className="flex flex-col">
      <Heading level={3} text="Button Component" />
      <Button type="primary" text="Primary" />
      <Button type="success" text="Success" />
      <Button type="danger" text="Danger" />
      <Button type="secondary" text="Secondary" />
      <Button type="light" text="Light" />
      <Button type="dark" text="Dark" />
    </div>
  );
};

export default ButtonPage;
