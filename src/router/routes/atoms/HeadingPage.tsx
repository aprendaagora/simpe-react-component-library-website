import { Heading } from "@aprendaagora/simple-react-component-library";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ComponentExample from "../../../components/ComponentExample";

const HeadingPage = () => {
  return (
    <div>
      <Heading level={3} text="Heading" tailwind="mb-5" />

      <ComponentExample
        heading="Heading level 1"
        Component={<Heading text="This is a Heading level 1" />}
        code={`<Heading text="This is a Heading level 1" />`}
      />

      <ComponentExample
        heading="Heading level 2"
        Component={<Heading level={2} text="This is a Heading level 2" />}
        code={`<Heading level={2} text="This is a Heading level 2" />`}
      />

      <ComponentExample
        heading="Heading level 3"
        Component={<Heading level={3} text="This is a Heading level 3" />}
        code={`<Heading level={3} text="This is a Heading level 3" />`}
      />

      <ComponentExample
        heading="Heading level 4"
        Component={<Heading level={4} text="This is a Heading level 4" />}
        code={`<Heading level={4} text="This is a Heading level 4" />`}
      />

      <ComponentExample
        heading="Heading level 5"
        Component={<Heading level={5} text="This is a Heading level 5" />}
        code={`<Heading level={5} text="This is a Heading level 5" />`}
      />

      <ComponentExample
        heading="Heading level 6"
        Component={<Heading level={6} text="This is a Heading level 6" />}
        code={`<Heading level={6} text="This is a Heading level 6" />`}
      />
    </div>
  );
};

export default HeadingPage;
