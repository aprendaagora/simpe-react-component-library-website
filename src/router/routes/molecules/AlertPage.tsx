import { Alert, Heading } from "@aprendaagora/simple-react-component-library";

import ComponentExample from "../../../components/ComponentExample";

const AlertPage = () => {
  return (
    <div className="w-full">
      <Heading level={3} text="Alert Component" tailwind="mb-5" />

      <ComponentExample
        heading="Primary Alert"
        Component={<Alert text="This is a primary alert" type="primary" />}
        code={`<Alert text="This is a primary alert" type="primary" />`}
      />

      <ComponentExample
        heading="Success Alert"
        Component={<Alert text="This is a success alert" type="success" />}
        code={`<Alert text="This is a success alert" type="success" />`}
      />

      <ComponentExample
        heading="Danger Alert"
        Component={<Alert text="This is a danger alert" type="danger" />}
        code={`<Alert text="This is a danger alert" type="danger" />`}
      />

      <ComponentExample
        heading="Secondary Alert"
        Component={<Alert text="This is a secondary alert" type="secondary" />}
        code={`<Alert text="This is a secondary alert" type="secondary"/>`}
      />

      <ComponentExample
        heading="Light Alert"
        Component={<Alert text="This is a light alert" type="light" />}
        code={`<Alert text="This is a light alert" type="light" />`}
      />

      <ComponentExample
        heading="Dark Alert"
        Component={<Alert text="This is a dark alert" type="dark" />}
        code={`<Alert text="This is a dark alert" type="dark"/>`}
      />

      <ComponentExample
        heading="Primary Alert with Close Button"
        Component={
          <Alert
            text="This is a primary alert"
            type="primary"
            closeButton={true}
          />
        }
        code={`<Alert text="This is a primary alert" type="primary" closeButton={true}/>`}
      />

      <ComponentExample
        heading="Success Alert with Close Button"
        Component={
          <Alert
            text="This is a success alert"
            type="success"
            closeButton={true}
          />
        }
        code={`<Alert text="This is a successs alert" type="success" closeButton={true}/>`}
      />
    </div>
  );
};

export default AlertPage;
