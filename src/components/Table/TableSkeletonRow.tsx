import { Skeleton } from "@mantine/core";

export interface TableSkeletonRowProps {
  gridTemplate: string;
  columnCount: number;
}

export function TableSkeletonRow({
  gridTemplate,
  columnCount,
}: TableSkeletonRowProps) {
  return (
    <div
      className="row"
      style={{ "--grid-template-columns": gridTemplate } as React.CSSProperties}
    >
      {Array.from({ length: columnCount }).map((_, i) => (
        <Skeleton key={i} height={50} />
      ))}
    </div>
  );
}
