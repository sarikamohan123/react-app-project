import type { ColumnDef, RowData } from "@tanstack/react-table";

export type AppColumnDef<TData extends RowData, Tvalue = unknown> = ColumnDef<
  TData,
  Tvalue
> & {
  header: string;
  size: number;
};
