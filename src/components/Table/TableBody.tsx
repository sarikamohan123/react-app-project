import type { AppColumnDef } from "../../types/app-column-def";
import { TableRow } from "./TableRow";
import { getGridTemplateColumns } from "../../utilities/get-grid-template-columns";
import { TableSkeletonRow } from "./TableSkeletonRow";

export interface TableBodyProps<TData extends { url: string }> {
  data: TData[];
  columns: AppColumnDef<TData>[];
  isLoading: boolean;
  skeletonCount?: number;
}
export function TableBody<TData extends { url: string }>({
  data,
  columns,
  isLoading,
  skeletonCount = 3,
}: TableBodyProps<TData>) {
  // Generate grid template columns based on the column definitions
  const gridTemplate = getGridTemplateColumns(columns);

  return (
    <div className="table-body">
      {isLoading
        ? Array.from({ length: skeletonCount }).map((_, index) => (
            <TableSkeletonRow
              key={index}
              gridTemplate={gridTemplate}
              columnCount={columns.length}
            />
          ))
        : data.map((item) => (
            <TableRow<TData>
              key={item.url}
              item={item}
              columns={columns}
              gridTemplate={gridTemplate}
            />
          ))}
    </div>
  );
}
