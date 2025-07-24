import type { AppColumnDef } from "../types/app-column-def";

export function getGridTemplateColumns(
  columns: AppColumnDef<unknown, unknown>[]
): string {
  return columns.map((col) => `${col.size}px`).join(" ");
}
