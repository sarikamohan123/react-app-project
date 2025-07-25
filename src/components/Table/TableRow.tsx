import { TableCell } from "./TableCell";
import type { AppColumnDef } from "../../types/app-column-def";

export interface TableRowProps<TData> {
  item: TData;
  columns: AppColumnDef<TData>[];
}

export function TableRow<TData>({ item, columns }: TableRowProps<TData>) {
  return (
    <div className="row">
      {columns.map((col, index) => (
        <TableCell key={col.id} header={col.header}>
          {String(col.accessorFn?.(item, index))}
        </TableCell>
      ))}
    </div>
  );
}
