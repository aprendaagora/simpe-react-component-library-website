import React, { useState } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

interface TableProps {
  data: any[];
  headers?: any[];
  orderingHeaders?: any[];
  tailwind?: string;
}

const x = 0;

const Table = ({ data, headers, orderingHeaders, tailwind }: TableProps) => {
  const [sortingHeader, setSortingHeader] = useState("");
  const [sortingIndex, setSortingIndex] = useState<null | number>(null);
  const [ascending, setAscending] = useState(true);
  const [filterInput, setFilterInput] = useState("");
  const [filterColumn, setFilterColumn] = useState("");
  const [filterIndex, setFilterIndex] = useState(0);

  const filteredData = filterInput
    ? data.filter((row) =>
        String(row[filterIndex])
          .toLowerCase()
          .includes(filterInput.toLowerCase())
      )
    : data;

  const sortRows = (header: string, changingSortingHeader: boolean) => {
    console.log("Sort");
    setSortingHeader(header);
    setSortingIndex(orderingHeaders!.findIndex((item) => item === header));

    if (changingSortingHeader) {
      setAscending((value) => true);
    } else {
      setAscending((value) => !value);
    }
  };

  const filterTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value);
  };

  const changeFilterColumn = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (headers) {
      setFilterIndex(
        headers?.findIndex((item) => String(item) == e.target.value)
      );
    }
  };

  return (
    <div>
      {Array.isArray(data[0]) ? (
        <>
          <div className="text-left">
            <h1>Array of Arrays</h1>
            <h1>Sorting by: {sortingHeader}</h1>
            <h1>Sorting Index: {sortingIndex}</h1>
            <h1>Filtering by: {headers![filterIndex]}</h1>
            <h1>Ordering headers: {orderingHeaders}</h1>
          </div>

          <table className={`border ${tailwind}`}>
            {headers && (
              <thead className="bg-gray-100">
                <tr>
                  {headers.map((header, i) => (
                    <th className="px-2 py-1" key={i}>
                      <span className="flex items-center justify-center">
                        {header}
                        {orderingHeaders?.includes(header) && (
                          <button
                            className={`ml-2
                              ${
                                sortingHeader === header
                                  ? "text-blue-500"
                                  : "text-gray-500"
                              }
                            `}
                            onClick={() =>
                              sortingHeader === header
                                ? sortRows(header, false)
                                : sortRows(header, true)
                            }
                          >
                            {sortingHeader === header ? (
                              ascending ? (
                                <FaArrowCircleUp />
                              ) : (
                                <FaArrowCircleDown />
                              )
                            ) : (
                              <FaArrowCircleUp />
                            )}
                          </button>
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
            )}

            <tbody>
              {sortingIndex != null
                ? filteredData
                    .sort((a, b) => {
                      if (ascending) {
                        return a[sortingIndex] < b[sortingIndex]
                          ? -1
                          : a[sortingIndex] > b[sortingIndex]
                          ? 1
                          : 0;
                      } else {
                        return a[sortingIndex] > b[sortingIndex]
                          ? -1
                          : a[sortingIndex] < b[sortingIndex]
                          ? 1
                          : 0;
                      }
                    })
                    .map((row: any[], i: number) => (
                      <tr key={i}>
                        {row.map((cel, j: number) => (
                          <td key={j}>{cel}</td>
                        ))}
                      </tr>
                    ))
                : filteredData.map((row: any[], i: number) => (
                    <tr key={i}>
                      {row.map((cel, j: number) => (
                        <td key={j}>{cel}</td>
                      ))}
                    </tr>
                  ))}
            </tbody>
          </table>
          <div className="bg-slate-200 flex justify-start p-2">
            <span>Search by </span>
            <select onChange={changeFilterColumn}>
              {headers?.map((header) => (
                <option key={header} value={header}>
                  {header}
                </option>
              ))}
            </select>
            <input onChange={filterTable} className="border" type="" />
          </div>
        </>
      ) : (
        <>
          <h1>Not array of arrays</h1>
          <p>{Object.keys(data[0])}</p>
          <table></table>
        </>
      )}
    </div>
  );
};

export default Table;
