import type { PokemonData } from "../types";
import {
  SimpleGrid,
  Card,
  Title,
  Stack,
  Group,
  Image,
  Text,
  Skeleton,
} from "@mantine/core";

export default function OverviewTab({
  data,
  isLoading,
}: {
  data: PokemonData;
  isLoading: boolean;
}) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
      <Card withBorder padding="md">
        <Title order={3} mb="md" c="blue.6">
          Basic Info
        </Title>
        <Stack gap="sm">
          <Group justify="space-between">
            <Text fw={500}>Height:</Text>
            {isLoading ? (
              <Skeleton width={40} height={20} />
            ) : (
              <Text>{(data.height / 10).toFixed(1)} m</Text>
            )}
          </Group>
          <Group justify="space-between">
            <Text fw={500}>Weight:</Text>
            {isLoading ? (
              <Skeleton width={40} height={20} />
            ) : (
              <Text>{(data.weight / 10).toFixed(1)} kg</Text>
            )}
          </Group>
          <Group justify="space-between">
            <Text fw={500}>Base Experience:</Text>
            {isLoading ? (
              <Skeleton width={40} height={20} />
            ) : (
              <Text>{data.base_experience}</Text>
            )}
          </Group>
        </Stack>
      </Card>

      <Card withBorder padding="md">
        <Title order={3} mb="md" c="blue.6">
          Sprites
        </Title>
        <SimpleGrid cols={2} spacing="sm">
          {isLoading ? (
            <Skeleton width={80} height={80} />
          ) : (
            <Image
              src={data.sprites.front_default || "/placeholder.svg"}
              alt="Front normal"
              w={80}
              h={80}
              fit="contain"
            />
          )}
          {isLoading ? (
            <Skeleton width={80} height={80} />
          ) : (
            <Image
              src={data.sprites.front_shiny || "/placeholder.svg"}
              alt="Front shiny"
              w={80}
              h={80}
              fit="contain"
            />
          )}
          {isLoading ? (
            <Skeleton width={80} height={80} />
          ) : (
            <Image
              src={data.sprites.back_default || "/placeholder.svg"}
              alt="Back normal"
              w={80}
              h={80}
              fit="contain"
            />
          )}

          {isLoading ? (
            <Skeleton width={80} height={80} />
          ) : (
            <Image
              src={data.sprites.back_shiny || "/placeholder.svg"}
              alt="Back shiny"
              w={80}
              h={80}
              fit="contain"
            />
          )}
        </SimpleGrid>
      </Card>
    </SimpleGrid>
  );
}
