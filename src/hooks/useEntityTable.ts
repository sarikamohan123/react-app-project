import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import type { AppColumnDef } from "../types/app-column-def";
import { useMemo } from "react";

export interface EntityItem {
  name?: string;
  url: string;
}

interface EntityListResult {
  results: EntityItem[];
}

const empty = [] as EntityItem[];

function extractIdFromUrl(url: string): number {
  const parts = url.split("/").filter(Boolean);
  return Number(parts[parts.length - 1]);
}
//Hook to convert raw data into table format
function useEntityTable(data: EntityListResult | undefined) {
  // Memoize columnHelper so it's not recreated on every render
  const columnHelper = useMemo(() => createColumnHelper<EntityItem>(), []);

  // Define columns for the table
  const columns = useMemo<AppColumnDef<EntityItem>[]>(() => {
    const cols: AppColumnDef<EntityItem>[] = [
      columnHelper.accessor((row): number => extractIdFromUrl(row.url), {
        id: "id",
        header: "ID",
        size: 60,
        cell: (info) => info.getValue().toString(),
      }) as AppColumnDef<EntityItem>,

      columnHelper.accessor((row) => row.url, {
        id: "url",
        header: "URL",
        size: 200,
        cell: (info) => info.getValue(),
      }) as AppColumnDef<EntityItem>,
    ];
    // add a column for the name

    if (data?.results?.[0].name) {
      cols.push(
        columnHelper.accessor((row): string => row.name ?? "", {
          id: "name",
          header: "Name",
          size: 100,
          cell: (info) => info.getValue(),
        }) as AppColumnDef<EntityItem>
      );
    }
    return cols;
  }, [data, columnHelper]);

  // Create the table instance
  const table = useReactTable({
    // data: data?.results ?? [],
    data: data?.results ?? empty,
    columns,
    manualPagination: true,
    rowCount: data?.results.length,
    getCoreRowModel: getCoreRowModel(),
  });
  const rows = table.getRowModel().rows.map((row) => row.original);
  return { rows, columns };
}
export default useEntityTable;
