import { useEffect, useState, useMemo } from "react";
import {useReactTable,getCoreRowModel,flexRender} from '@tanstack/react-table'

export default function Tablecontent({pointsdata}) {



    const data = useMemo(() => pointsdata, []);

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

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
    })
  return (
    <div>
        <table>
            <thead>
                {table.getHeaderGroups().map(headerGroup =>(
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell,
                                    cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
