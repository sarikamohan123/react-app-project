import {
  Card,
  Title,
  Box,
  Group,
  Text,
  Progress,
  Stack,
  Skeleton,
} from "@mantine/core";
import type { PokemonData } from "../types";
import { statNames } from "../const";
import { formatName, getStatColor } from "../utility";

export default function StatsTab({
  data,
  isLoading,
}: {
  data: PokemonData;
  isLoading: boolean;
}) {
  const skeletonRows = Array.from({ length: 6 });
  if (isLoading) {
    return (
      <Card withBorder padding="md">
        <Title order={3} mb="md" c="blue.6">
          Base Stats
        </Title>
        <Stack gap="md">
          {skeletonRows.map((_, idx) => (
            <Box key={idx}>
              <Group justify="space-between" mb={5}>
                <Skeleton height={18} width={80} />
                <Skeleton height={18} width={80} />
              </Group>
              <Skeleton height={20} width="100%" />
            </Box>
          ))}
        </Stack>
      </Card>
    );
  }
  return (
    <Card withBorder padding="md">
      <Title order={3} mb="md" c="blue.6">
        Base Stats
      </Title>
      <Stack gap="md">
        {data.stats.map((stat) => (
          <Box key={stat.stat.name}>
            <Group justify="space-between" mb={5}>
              <Text fw={500}>
                {statNames[stat.stat.name] || formatName(stat.stat.name)}
              </Text>
              <Text fw={700}>{stat.base_stat}</Text>
            </Group>
            <Progress
              value={(stat.base_stat / 255) * 100}
              color={getStatColor(stat.base_stat)}
              size="lg"
            />
          </Box>
        ))}
      </Stack>
    </Card>
  );
}
