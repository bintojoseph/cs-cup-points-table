import { useEffect, useState, useMemo } from "react";
import Tablecontent from "./Tablecontent";
import { client } from "../../config";

export default function Table() {
  const [tabledata, setTabledata] = useState([]);
  const [total, setTotal] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      const result = await client.fetch(
        `*[_type == "points"]{
            event,
            cs27,
            cs26,
            cs25,
            cs24,
            pg
          }`
      );
      console.log(result)
      setTabledata(result);
    };
    fetchdata();
  }, []);

  const getTotal = (colName) => {
    return tabledata.reduce((sum,row) => sum +
    (row[colName] || 0),0);
  }
  

  const data = useMemo(() => tabledata, []);

  const columns = [
    {
      header: "EVENT NAME",
      accessorKey: "event",
    },
    {
      header: "CSE 27",
      accessorKey: "cs27",
    },
    {
      header: "CSE 26",
      accessorKey: "cs26",
    },
    {
      header: "CSE 25",
      accessorKey: "cs25",
    },
    {
      header: "CSE 24",
      accessorKey: "cs24",
    },
    {
      header: "PG",
      accessorKey: "pg",
    },
  ];

  return (
    <div className="bg-purple-900/70 h-fit w-fit rounded-lg p-3 md:p-7">
      <table className="divide-y divide-gray-200  text-xs md:text-lg">
        <thead className="">
          <tr>
            <th className="pl-5 md:pr-5 text-left py-3 ">Event Name</th>
            <th className="px-1 md:pr-5 text-left py-3">CSE27</th>
            <th className="px-1 md:pr-5 text-left py-3">CSE26</th>
            <th className="px-1 md:pr-5 text-left py-3">CSE25</th>
            <th className="px-1 md:pr-5 text-left py-3">CSE24</th>
            <th className="px-1 md:pr-5 text-left py-3">PG</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
            {tabledata.map((item) => {
                return(
                    <tr key={item.id}>
                        <td className="px-6 py-4">{item.event}</td>
                        <td>{item.cs27}</td>
                        <td>{item.cs26}</td>
                        <td>{item.cs25}</td>
                        <td>{item.cs24}</td>
                        <td>{item.pg}</td>
                    </tr>
            )})}
            <tr>
                <td className="px-6 py-4">
                    Total
                </td>
                <td>{getTotal('cs27')}</td>
                <td>{getTotal('cs26')}</td>
                <td>{getTotal('cs25')}</td>
                <td>{getTotal('cs24')}</td>
                <td>{getTotal('pg')}</td>
            </tr>

        </tbody>
      </table>
    </div>
  );
}
