import { Heading, Table } from "@aprendaagora/simple-react-component-library";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const headers1 = ["Number", "Brands", "Country"];
export const table1 = [
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
export const code1 = `const headers1 = ["Number", "Brands", "Country"];
const table1 = [
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
  data={table1}
  headers={headers1}
  orderingHeaders={["Number", "Country"]}
/>`;

const headers2 = ["Number", "Brands", "Country"];
const table2 = [
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
const code2 = `const headers1 = ["Number", "Brands", "Country"];
const table1 = [
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
  data={table1}
  headers={headers1}
/>`;

const headers3 = ["Number", "Brands", "Country"];
const table3 = [
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
const code3 = `const headers1 = ["Number", "Brands", "Country"];
const table1 = [
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
  data={table1}
  headers={headers1}
  nItemsPerPage={3}
/>`;

const TablePage = () => {
  return (
    <div>
      <Heading level={3} text="Table" tailwind="mb-5" />

      <hr className="my-5" />

      <Heading level={5} text="Table with sorting columns" />
      <Table
        data={table1}
        headers={headers1}
        orderingHeaders={["Number", "Country"]}
        tailwind="mb-5"
      />

      <SyntaxHighlighter
        wrapLongLines
        showLineNumbers
        language="javascript"
        style={atomOneDark}
      >
        {code1}
      </SyntaxHighlighter>

      <Heading
        level={5}
        tailwind="mt-10 mb-5"
        text="Table without sorting columns"
      />
      <Table data={table2} headers={headers2} tailwind="mb-5" />

      <SyntaxHighlighter
        wrapLongLines
        showLineNumbers
        language="javascript"
        style={atomOneDark}
      >
        {code2}
      </SyntaxHighlighter>

      <Heading
        level={5}
        tailwind="mt-10 mb-5"
        text="Table with defined number of items per page"
      />
      <Table
        data={table3}
        headers={headers3}
        nItemsPerPage={3}
        tailwind="mb-5"
      />

      <SyntaxHighlighter
        wrapLongLines
        showLineNumbers
        language="javascript"
        style={atomOneDark}
      >
        {code3}
      </SyntaxHighlighter>
    </div>
  );
};

export default TablePage;
