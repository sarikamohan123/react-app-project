import { TableCell } from "./TableCell";
import type { AppColumnDef } from "../../types/app-column-def";

export interface TableRowProps<TData> {
  item: TData;
  columns: AppColumnDef<TData>[];
  gridTemplate: string;
}

export function TableRow<TData>({
  item,
  columns,
  gridTemplate,
}: TableRowProps<TData>) {
  return (
    <div
      className="row"
      style={{ "--grid-template-columns": gridTemplate } as React.CSSProperties}
    >
      {columns.map((col, index) => (
        <TableCell key={col.id} header={col.header}>
          {String(col.accessorFn?.(item, index))}
        </TableCell>
      ))}
    </div>
  );
}
