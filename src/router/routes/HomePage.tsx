import React from "react";
import {
  Button,
  Heading,
  List,
} from "@aprendaagora/simple-react-component-library";
import { Link } from "react-router-dom";
import atomicdesign from "../../static/images/atomicdesign.png";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const HomePage = () => {
  const items = ["atoms", "molecules", "organisms"];

  const code1 = `import {Button, Heading} from @aprendaagora/simple-react-component-library`;
  return (
    <div>
      <Heading level={4} text="Simple React Component Library" />

      <div className="my-5">
        <Heading level={6} text="Install library" tailwind="mb-2" />
        <SyntaxHighlighter language="javascript" style={atomOneDark}>
          npm install @aprendaagora/simple-react-component-library
        </SyntaxHighlighter>
      </div>

      <div className="my-5">
        <Heading level={6} text="Import component" tailwind="mb-2" />
        <SyntaxHighlighter language="javascript" style={atomOneDark}>
          {code1}
        </SyntaxHighlighter>
      </div>

      <hr className="my-10" />
      <List
        tailwind="mb-5"
        items={items}
        listStyle={{ marginTop: "20px" }}
        itemStyle={{ color: "blue" }}
        renderItem={(item) => (
          <Link className="hover:underline text-xl" to={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        )}
      />
      <img src={atomicdesign} alt="Atomic Design Illustration" />
    </div>
  );
};

export default HomePage;
