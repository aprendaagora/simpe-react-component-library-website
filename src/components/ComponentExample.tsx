import React from "react";
import { Badge, Heading } from "@aprendaagora/simple-react-component-library";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export interface ComponentExampleProps {
  heading: string;
  Component: React.ReactNode;
  code: string;
}

const ComponentExample: React.FC<ComponentExampleProps> = ({
  heading,
  Component,
  code,
}) => {
  return (
    <div className="my-10 flex flex-col bg-slate-50 p-2 border rounded">
      <Heading level={5} tailwind="mb-5" text={heading} />

      <div className="p-5 bg-white border mb-5">{Component}</div>

      <div>
        <SyntaxHighlighter
          showLineNumbers
          language="javascript"
          style={atomOneDark}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ComponentExample;
