import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";

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
  return (
    <div className="App">
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
