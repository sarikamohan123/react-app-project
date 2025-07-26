import React from "react";
import type { AppColumnDef } from "../../types/app-column-def";
import { TableRow } from "./TableRow";

export interface TableBodyProps<TData> {
  data: TData[];
  columns: AppColumnDef<TData>[];
}
export function TableBody<TData>({ data, columns }: TableBodyProps<TData>) {
  return (
    <div className="table-body">
      {data.map((data, index) => (
        <TableRow key={index} item={data} columns={columns} />
      ))}
    </div>
  );
}
