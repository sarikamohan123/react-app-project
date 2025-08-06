import type { AppColumnDef } from "../../types/app-column-def";
import { TableCell } from "./TableCell";
import { getGridTemplateColumns } from "../../utilities/get-grid-template-columns";

export interface TableHeaderProps<TData> {
  columns: AppColumnDef<TData>[];
}

export function TableHeader<TData>({ columns }: TableHeaderProps<TData>) {
  return (
    <div
      className="table-row table-header"
      style={
        {
          "--grid-template-columns": getGridTemplateColumns(columns),
        } as React.CSSProperties
      }
    >
      {columns.map((col) => (
        <TableCell key={col.id} header={col.header}></TableCell>
      ))}
    </div>
  );
}
