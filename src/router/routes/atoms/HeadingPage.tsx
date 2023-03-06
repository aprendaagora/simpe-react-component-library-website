import { Heading } from "@aprendaagora/simple-react-component-library";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const HeadingPage = () => {
  return (
    <div>
      <Heading level={3} text="Heading Component" />
      <Heading text="This is a Heading level 1" />
      <SyntaxHighlighter
        wrapLongLines
        showLineNumbers
        language="javascript"
        style={atomOneDark}
      >
        {`<Heading text="This is a Heading level 1" />`}
      </SyntaxHighlighter>
      <Heading level={2} text="This is a Heading level 2" />
      <Heading level={3} text="This is a Heading level 3" />
      <Heading level={4} text="This is a Heading level 4" />
      <Heading level={5} text="This is a Heading level 5" />
      <Heading level={6} text="This is a Heading level 6" />
    </div>
  );
};

export default HeadingPage;
