import { Heading, Table } from "@aprendaagora/simple-react-component-library";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const TablePage = () => {
  const headers0 = ["Fruit", "Brands", "Country"];
  const table0 = [
    [3, "Ferrari", "Brazil"],
    [1, "Ford", "France"],
    [2, "Nike", "Netherlands"],
    [4, "Harvard", "USA"],
    [7, "Apple", "China"],
    [6, "Honda", "Japan"],
    [8, "Nestle", "Colombia"],
    [5, "IKEA", "Argentina"],
    [9, "Samsung", "Spain"],
    [10, "Tik Tok", "Thailand"],
  ];
  const code0 = `const headers0 = ["Fruit", "Brands", "Country"];
const table0 = [
  [3, "Ferrari", "Brazil"],
  [1, "Ford", "France"],
  [2, "Nike", "Netherlands"],
  [4, "Harvard", "USA"],
  [7, "Apple", "China"],
  [6, "Honda", "Japan"],
  [8, "Nestle", "Colombia"],
  [5, "IKEA", "Argentina"],
  [9, "Samsung", "Spain"],
  [10, "Tik Tok", "Thailand"],
];

<Table
  data={table0}
  headers={headers0}
  orderingHeaders={["Fruit", "Country"]}
/>`;

  return (
    <div>
      <Heading level={3} text="Table Component" />

      <SyntaxHighlighter
        wrapLongLines
        showLineNumbers
        language="javascript"
        style={atomOneDark}
      >
        {code0}
      </SyntaxHighlighter>
      <Table
        data={table0}
        headers={headers0}
        orderingHeaders={["Fruit", "Country"]}
      />
    </div>
  );
};

export default TablePage;
