import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

interface EntityItem {
  name?: string;
  url: string;
}

interface EntityListResult {
  results: EntityItem[];
}

function extractIdFromUrl(url: string): number {
  const parts = url.split("/").filter(Boolean);
  return Number(parts[parts.length - 1]);
}
//Hook to convert raw data into table format
function useEntityTable(data: EntityListResult | undefined) {
  const columnHelper = createColumnHelper<EntityItem>();

  // Define columns for the table
  const columns = useMemo<ColumnDef<EntityItem>[]>(() => {
    const cols: ColumnDef<EntityItem>[] = [
      columnHelper.accessor((row): number => extractIdFromUrl(row.url), {
        id: "id",
        header: "ID",
        cell: (info) => info.getValue().toString(),
      }) as ColumnDef<EntityItem>,

      columnHelper.accessor((row) => row.url, {
        id: "url",
        header: "URL",
        cell: (info) => info.getValue(),
      }) as ColumnDef<EntityItem>,
    ];
    // add a column for the name

    if (data?.results?.[0].name) {
      cols.push(
        columnHelper.accessor((row): string => row.name ?? "", {
          id: "name",
          header: "Name",
          cell: (info) => info.getValue(),
        }) as ColumnDef<EntityItem>
      );
    }
    return cols;
  }, [data, columnHelper]);

  // Create the table instance
  const table = useReactTable({
    data: data?.results ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return table;
}
export default useEntityTable;
