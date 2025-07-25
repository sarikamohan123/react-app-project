import type { PropsWithChildren } from "react";

export interface TableCellProps extends PropsWithChildren {
  header: string;
}

export function TableCell({ children, header }: TableCellProps) {
  return (
    <div className="cell">
      <span className="label">{header}</span>
      <span className="value">{children}</span>
    </div>
  );
}
