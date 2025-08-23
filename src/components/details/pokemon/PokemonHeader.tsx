import {
  Stack,
  Group,
  Title,
  Text,
  Badge,
  Image,
  Button,
  Center,
} from "@mantine/core";
import type { PokemonData } from "./types";
import { typeColors } from "./const.ts";
import { formatName } from "./utility";

interface PokemonHeaderProps {
  data: PokemonData;
  showShiny: boolean;
  onToggleShiny: () => void;
}

export default function PokemonHeader({
  data,
  showShiny,
  onToggleShiny,
}: PokemonHeaderProps) {
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
