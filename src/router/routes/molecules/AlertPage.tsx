import { Alert, Heading } from "@aprendaagora/simple-react-component-library";
import React from "react";

const AlertPage = () => {
  return (
    <div className="w-full">
      <Heading level={3} text="Alert Component" />
      <Alert text="This is a primary alert" type="primary" />
      <Alert text="This is a success alert" type="success" />
      <Alert text="This is a danger alert" type="danger" />
      <Alert text="This is a secondary alert" type="secondary" />
      <Alert text="This is a light alert" type="light" />
      <Alert text="This is a dark alert" type="dark" />

      <hr className="my-5" />

      <Alert text="This is a primary alert" type="primary" closeButton={true} />
      <Alert text="This is a success alert" type="success" closeButton={true} />
    </div>
  );
};

export default AlertPage;
