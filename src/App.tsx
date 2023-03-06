import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import {
  Button,
  Alert,
  Input,
  Heading,
} from "@aprendaagora/simple-react-component-library";
import Navbar from "./components/Navbar";

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

const headers3 = ["Fruit", "Car", "Country", "Person"];
const table3 = [
  ["Banana", "Ferrari", "Brazil", "John"],
  ["Apple", "Ford", "France", "Phillip"],
  ["Orange", "Nike", "Netherlands", "Paul"],
];

const table1 = [
  {
    name: "Ramon",
    age: 19,
    confirmed: true,
  },
  {
    name: "Pedro",
    age: 19,
    confirmed: true,
  },
];

const table2 = [
  {
    name: "Facebook",
    numberEmployees: 50000,
    founder: "Mark Zuckerberg",
    location: "Palo Alto",
    marketCap: 10000000000,
    nDownloads: 6484894,
    publiclyTraded: true,
  },
];

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Navbar
        Logo={<Button text="Hello" />}
        routes={[
          { route: "team", text: "Team" },
          { route: "about", text: "About" },
        ]}
      />
      <Heading text="this is a heading" level={1} />
      <Alert text="this is an alert" closeButton={true} />
      <Button
        onClick={() => alert("Hello")}
        type="primary"
        tailwind=""
        text="Primary"
      />
      <p>{value}</p>
      <Input value={value} setValue={setValue} placeholder="Hello" />

      <Table
        data={table0}
        headers={headers0}
        orderingHeaders={["Fruit", "Brands"]}
        tailwind="w-full"
      />
      <Table data={table3} headers={headers3} />
      <hr />
      <Table data={table2} />
    </div>
  );
}

export default App;
