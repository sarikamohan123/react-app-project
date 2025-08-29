import {
  Stack,
  Group,
  Title,
  Text,
  Badge,
  Image,
  Button,
  Center,
  Skeleton,
} from "@mantine/core";
import type { PokemonData } from "./types";
import { typeColors } from "./const.ts";
import { formatName } from "./utility";

interface PokemonHeaderProps {
  data: PokemonData;
  showShiny: boolean;
  onToggleShiny: () => void;
  isLoading: boolean;
}

export default function PokemonHeader({
  data,
  showShiny,
  onToggleShiny,
  isLoading,
}: PokemonHeaderProps) {
  if (isLoading) {
    return (
      <Stack gap="md" mb="xl">
        <Group justify="space-between" align="flex-start">
          <div>
            <Skeleton height={30} width={160} />
            <Skeleton height={20} width={60} mt="sm" />
          </div>
          <Group gap="xs">
            <Skeleton height={28} width={80} radius="xl" />
            <Skeleton height={28} width={80} radius="xl" />
          </Group>
        </Group>

        <Center>
          <Stack align="center" gap="sm">
            <Skeleton height={200} width={200} radius="md" />
            <Skeleton height={36} width={120} radius="md" />
          </Stack>
        </Center>
      </Stack>
    );
  }

  return (
    <Stack gap="md" mb="xl">
      <Group justify="space-between" align="flex-start">
        <div>
          <Title order={1} size="h1" c="blue.7">
            {formatName(data.name)}
          </Title>
          <Text size="lg" c="dimmed">
            #{data.id.toString().padStart(3, "0")}
          </Text>
        </div>
        <Group gap="xs">
          {data.types.map((type) => (
            <Badge
              key={type.type.name}
              size="lg"
              style={{
                backgroundColor: typeColors[type.type.name] || "#68D391",
              }}
              c="white"
            >
              {formatName(type.type.name)}
            </Badge>
          ))}
        </Group>
      </Group>

      {/* Sprite Display */}
      <Center>
        <Stack align="center" gap="sm">
          <Image
            src={
              showShiny ? data.sprites.front_shiny : data.sprites.front_default
            }
            alt={`${data.name} sprite`}
            w={200}
            h={200}
            fit="contain"
          />
          <Button variant="light" size="sm" onClick={onToggleShiny}>
            {showShiny ? "Show Normal" : "Show Shiny"}
          </Button>
        </Stack>
      </Center>
    </Stack>
  );
}
