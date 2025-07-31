import type { AppColumnDef } from "../types/app-column-def";

export function getGridTemplateColumns<TData>(
  columns: AppColumnDef<TData>[]
): string {
  return columns.map((col) => `${col.size}px`).join(" ");
}
