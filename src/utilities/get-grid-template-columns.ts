import type { AppColumnDef } from "../types/app-column-def";

export function getGridTemplateColumns<TData>(
  columns: AppColumnDef<TData>[]
): string {
  const totalWidth = columns.reduce((sum, col) => sum + col.size, 0);
  return columns
    .map((col) => {
      const percent = (col.size / totalWidth) * 100;
      return `${percent.toFixed(2)}%`;
    })
    .join(" ");
}
