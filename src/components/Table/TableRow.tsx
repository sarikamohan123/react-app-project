import type { KeyboardEventHandler } from "react";
import type { AppColumnDef } from "../../types/app-column-def";
import { TableCell } from "./TableCell";

export interface TableRowProps<TData> {
  item: TData;
  columns: AppColumnDef<TData>[];
  gridTemplate: string;
  onRowClick?: (item: TData) => void;
}

export function TableRow<TData>({
  item,
  columns,
  gridTemplate,
  onRowClick,
}: TableRowProps<TData>) {
  const clickable = typeof onRowClick === "function";

  const handleClick = () => {
    if (clickable) onRowClick!(item);
  };
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (!clickable) return;
    if (event.key === "Enter" || event.key === "" || event.key === "Spacebar") {
      event.preventDefault();
      onRowClick!(item);
    }
  };
  return (
    <div
      className="row"
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={clickable ? handleClick : undefined}
      onKeyDown={clickable ? handleKeyDown : undefined}
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
