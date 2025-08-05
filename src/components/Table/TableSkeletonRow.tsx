import { Box, Skeleton } from "@mantine/core";

export interface TableSkeletonRowProps {
  gridTemplate: string;
  columnCount: number;
}

export function TableSkeletonRow({
  gridTemplate,
  columnCount,
}: TableSkeletonRowProps) {
  const rowHeight = 25.46;
  return (
    <Box
      className="row"
      p={3}
      style={{
        "--grid-template-columns": gridTemplate,
        height: `${rowHeight}px`,
      }}
    >
      {Array.from({ length: columnCount }).map((_, i) => (
        <Box className="cell" key={i}>
          <Skeleton height={rowHeight * 0.8} />
        </Box>
      ))}
    </Box>
  );
}
