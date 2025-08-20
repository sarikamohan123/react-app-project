import { useNavigate } from "@tanstack/react-router";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import type { AppColumnDef } from "../../types/app-column-def";
import type { EntityItem } from "../../hooks/useEntityTable";
import { getIdFromUrl } from "../../utilities/get-id-from-url";
import type { AllowedEntity } from "../../routes/detail-params";

import "./responsiveTable.css";

export interface ResponsiveTableProps {
  data: EntityItem[];
  columns: AppColumnDef<EntityItem>[];
  isLoading: boolean;
  entity: AllowedEntity;
}

export function ResponsiveTable({
  data,
  columns,
  isLoading,
  entity,
}: ResponsiveTableProps) {
  const navigate = useNavigate();
  const onRowClick = (item: EntityItem) => {
    const id = getIdFromUrl(item.url);
    if (!Number.isFinite(id)) return;
    navigate({ to: `/${entity}/${id}`, params: { entity, id } });
  };
  return (
    <div className="responsive-table">
      <TableHeader columns={columns} />
      <TableBody
        data={data}
        columns={columns}
        isLoading={isLoading}
        onRowClick={onRowClick}
      />
    </div>
  );
}
