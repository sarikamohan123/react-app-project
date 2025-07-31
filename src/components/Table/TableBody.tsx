import type { AppColumnDef } from "../../types/app-column-def";
import { TableRow } from "./TableRow";
import { getGridTemplateColumns } from "../../utilities/get-grid-template-columns";
import type React from "react";

export interface TableBodyProps<TData extends { url: string }> {
  data: TData[];
  columns: AppColumnDef<TData>[];
}
export function TableBody<TData extends { url: string }>({
  data,
  columns,
}: TableBodyProps<TData>) {
  // Generate grid template columns based on the column definitions
  const gridTemplate = getGridTemplateColumns(columns);
  return (
    <div className="table-body">
      {data.map((item) => (
        <TableRow<TData>
          key={item.url}
          item={item}
          columns={columns}
          gridTemplate={gridTemplate}
        />
      ))}
    </div>
  );
}
