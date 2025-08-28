import {
  SimpleGrid,
  Card,
  Group,
  Text,
  Badge,
  Title,
  Skeleton,
  Stack,
  Box,
} from "@mantine/core";
import type { PokemonData } from "../types";
import { formatName } from "../utility";

export default function AbilitiesTab({
  data,
  isLoading,
}: {
  data: PokemonData;
  isLoading: boolean;
}) {
  if (isLoading) {
    const skeletonRows = Array.from({ length: 2 });
    return (
      <Card withBorder padding="md">
        <Title order={3} mb="md" c="blue.6">
          Abilities
        </Title>
        <Stack gap="sm">
          {skeletonRows.map((_, idx) => (
            <Box key={idx}>
              <Skeleton height={18} width="40%" />
              <Skeleton height={14} width="80" />
            </Box>
          ))}
        </Stack>
      </Card>
    );
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      {data.abilities.map((ability, index) => (
        <Card key={index} withBorder padding="md">
          <Group justify="space-between" mb="sm">
            <Text fw={600} size="lg">
              {formatName(ability.ability.name)}
            </Text>
            {ability.is_hidden && (
              <Badge color="orange" size="sm">
                Hidden
              </Badge>
            )}
          </Group>
          <Text size="sm" c="dimmed">
            Ability details would be fetched from: {ability.ability.url}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
}
