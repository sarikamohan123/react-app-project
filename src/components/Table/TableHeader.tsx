import type { AppColumnDef } from "../../types/app-column-def";
import { TableCell } from "./TableCell";

export interface TableHeaderProps<TData> {
  columns: AppColumnDef<TData>[];
}

export function TableHeader<TData>({ columns }: TableHeaderProps<TData>) {
  return (
    <div className="table-row table-header">
      {columns.map((col) => (
        <TableCell key={col.id} header={col.header} />
      ))}
    </div>
  );
}
