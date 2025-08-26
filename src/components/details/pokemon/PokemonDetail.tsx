import { useState } from "react";
import {
  Card,
  // Text,
  // Badge,
  // Group,
  // Stack,
  // Tabs,
  //Progress,
  // Image,
  Container,
  //Title,
  //Button,
  Divider,
  //SimpleGrid,
  //Box,
  //Center,
} from "@mantine/core";

import type { PokemonData } from "./types";
import PokemonHeader from "./PokemonHeader";
// import { set } from "zod";
// import { typeColors } from "./const.ts";
// import { formatName } from "./utility.ts";

export default function PokemonDetails({
  data,
  isLoading,
}: {
  data: PokemonData;
  isLoading: boolean;
}) {
  // export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  const pokemon = data;
  const [showShiny, setShowShiny] = useState(false);
  // const [activeTab, setActiveTab] = useState<string | null>("overview");

  // const levelUpMoves = pokemon.moves
  //   .filter((move) =>
  //     move.version_group_details.some(
  //       (detail) => detail.move_learn_method.name === "level-up"
  //     )
  //   )
  //   .sort((a, b) => {
  //     const levelA =
  //       a.version_group_details.find(
  //         (d) => d.move_learn_method.name === "level-up"
  //       )?.level_learned_at || 0;
  //     const levelB =
  //       b.version_group_details.find(
  //         (d) => d.move_learn_method.name === "level-up"
  //       )?.level_learned_at || 0;
  //     return levelA - levelB;
  //   })
  //   .slice(0, 20);

  return (
    <Container size="lg" py="xl">
      <Card shadow="md" padding="xl" radius="md">
        {/* Header Section */}
        {/* <Stack gap="md" mb="xl">
          <Group justify="space-between" align="flex-start">
            <div>
              <Title order={1} size="h1" c="blue.7">
                {formatName(pokemon.name)}
              </Title>
              <Text size="lg" c="dimmed">
                #{pokemon.id.toString().padStart(3, "0")}
              </Text>
            </div>
            <Group gap="xs">
              {pokemon.types.map((type) => (
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
          </Group> */}

        {/* Sprite Display */}
        {/* <Center>
            <Stack align="center" gap="sm">
              <Image
                src={
                  showShiny
                    ? pokemon.sprites.front_shiny
                    : pokemon.sprites.front_default
                }
                alt={`${pokemon.name} sprite`}
                w={200}
                h={200}
                fit="contain"
              />
              <Button
                variant="light"
                size="sm"
                onClick={() => setShowShiny(!showShiny)}
              >
                {showShiny ? "Show Normal" : "Show Shiny"}
              </Button>
            </Stack>
          </Center>
        </Stack> */}
        <PokemonHeader
          data={pokemon}
          showShiny={showShiny}
          onToggleShiny={() => setShowShiny((prev) => !prev)}
          isLoading={isLoading}
        />
        <Divider mb="xl" />

        {/* Tabbed Content */}
        {/* <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List grow>
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="stats">Stats</Tabs.Tab>
            <Tabs.Tab value="abilities">Abilities</Tabs.Tab>
            <Tabs.Tab value="moves">Moves</Tabs.Tab>
          </Tabs.List> */}

        {/* <Tabs.Panel value="overview" pt="xl">
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
              <Card withBorder padding="md">
                <Title order={3} mb="md" c="blue.6">
                  Basic Info
                </Title>
                <Stack gap="sm">
                  <Group justify="space-between">
                    <Text fw={500}>Height:</Text>
                    <Text>{(pokemon.height / 10).toFixed(1)} m</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text fw={500}>Weight:</Text>
                    <Text>{(pokemon.weight / 10).toFixed(1)} kg</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text fw={500}>Base Experience:</Text>
                    <Text>{pokemon.base_experience}</Text>
                  </Group>
                </Stack>
              </Card>

              <Card withBorder padding="md">
                <Title order={3} mb="md" c="blue.6">
                  Sprites
                </Title>
                <SimpleGrid cols={2} spacing="sm">
                  <Image
                    src={pokemon.sprites.front_default || "/placeholder.svg"}
                    alt="Front normal"
                    w={80}
                    h={80}
                    fit="contain"
                  />
                  <Image
                    src={pokemon.sprites.front_shiny || "/placeholder.svg"}
                    alt="Front shiny"
                    w={80}
                    h={80}
                    fit="contain"
                  />
                  <Image
                    src={pokemon.sprites.back_default || "/placeholder.svg"}
                    alt="Back normal"
                    w={80}
                    h={80}
                    fit="contain"
                  />
                  <Image
                    src={pokemon.sprites.back_shiny || "/placeholder.svg"}
                    alt="Back shiny"
                    w={80}
                    h={80}
                    fit="contain"
                  />
                </SimpleGrid>
              </Card>
            </SimpleGrid>
          </Tabs.Panel> */}

        {/* <Tabs.Panel value="stats" pt="xl">
            <Card withBorder padding="md">
              <Title order={3} mb="md" c="blue.6">
                Base Stats
              </Title>
              <Stack gap="md">
                {pokemon.stats.map((stat) => (
                  <Box key={stat.stat.name}>
                    <Group justify="space-between" mb={5}>
                      <Text fw={500}>
                        {statNames[stat.stat.name] ||
                          formatName(stat.stat.name)}
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
          </Tabs.Panel> */}

        {/* <Tabs.Panel value="abilities" pt="xl">
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              {pokemon.abilities.map((ability, index) => (
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
          </Tabs.Panel> */}

        {/* <Tabs.Panel value="moves" pt="xl">
            <Card withBorder padding="md">
              <Title order={3} mb="md" c="blue.6">
                Level-up Moves (First 20)
              </Title>
              <Stack gap="xs">
                {levelUpMoves.map((move, index) => {
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
          </Tabs.Panel> */}
        {/* </Tabs> */}
      </Card>
    </Container>
  );
}
