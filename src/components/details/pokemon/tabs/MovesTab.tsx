import { Card, Title, Stack, Group, Text, Badge } from "@mantine/core";
import type { PokemonData, PokemonMove } from "../types";
import { formatName } from "../utility";

function getLevelUpMoves(moves: PokemonMove[], limit = 20) {
  return moves
    .filter((move) =>
      move.version_group_details.some(
        (d) => d.move_learn_method.name === "level-up"
      )
    )
    .sort((a, b) => {
      const levelA =
        a.version_group_details.find(
          (d) => d.move_learn_method.name === "level-up"
        )?.level_learned_at || 0;
      const levelB =
        b.version_group_details.find(
          (d) => d.move_learn_method.name === "level-up"
        )?.level_learned_at || 0;
      return levelA - levelB;
    })
    .slice(0, limit);
}

export default function MovesTab({ data }: { data: PokemonData }) {
  const levelUps = getLevelUpMoves(data.moves, 20);
  return (
    <Card withBorder padding="md">
      <Title order={3} mb="md" c="blue.6">
        Level-up Moves (First 20)
      </Title>
      <Stack gap="xs">
        {levelUps.map((move, index) => {
          const levelDetail = move.version_group_details.find(
            (detail) => detail.move_learn_method.name === "level-up"
          );
          return (
            <Group
              key={index}
              justify="space-between"
              p="sm"
              style={{
                borderRadius: 4,
                backgroundColor: "var(--mantine-color-gray-0)",
              }}
            >
              <Text fw={500}>{formatName(move.move.name)}</Text>
              <Badge color="blue" size="sm">
                Level {levelDetail?.level_learned_at || 0}
              </Badge>
            </Group>
          );
        })}
      </Stack>
    </Card>
  );
}
