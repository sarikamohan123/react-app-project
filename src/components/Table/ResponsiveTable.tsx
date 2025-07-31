import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import type { AppColumnDef } from "../../types/app-column-def";
import type { EntityItem } from "../../hooks/useEntityTable";

import "./responsiveTable.css";

export interface ResponsiveTableProps {
  data: EntityItem[];
  columns: AppColumnDef<EntityItem>[];
}

export function ResponsiveTable({ data, columns }: ResponsiveTableProps) {
  return (
    <div className="responsive-table">
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
    </div>
  );
}
