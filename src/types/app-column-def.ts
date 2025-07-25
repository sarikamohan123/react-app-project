import type { AccessorFnColumnDef, RowData } from "@tanstack/react-table";

export type AppColumnDef<
  TData extends RowData,
  Tvalue = unknown
> = AccessorFnColumnDef<TData, Tvalue> & {
  header: string;
  size: number;
};
