import { useState } from "react";
import { Card, Container, Divider } from "@mantine/core";

import type { PokemonData } from "./types";
import PokemonHeader from "./PokemonHeader";
import OverviewTab from "./tabs/OverviewTab";
import StatsTab from "./tabs/StatsTab";
import AbilitiesTab from "./tabs/AbilitiesTab";
import MovesTab from "./tabs/MovesTab";

export default function PokemonDetails({
  data,
  isLoading,
}: {
  data: PokemonData;
  isLoading: boolean;
}) {
  const pokemon = data;
  const [showShiny, setShowShiny] = useState(false);
  return (
    <Container size="lg" py="xl">
      <Card shadow="md" padding="xl" radius="md">
        <PokemonHeader
          data={pokemon}
          showShiny={showShiny}
          onToggleShiny={() => setShowShiny((prev) => !prev)}
          isLoading={isLoading}
        />
        <Divider mb="xl" />
        <OverviewTab data={pokemon} isLoading={isLoading} />
        <StatsTab data={pokemon} isLoading={isLoading} />
        <AbilitiesTab data={pokemon} isLoading={isLoading} />
        <MovesTab data={pokemon} isLoading={isLoading} />
      </Card>
    </Container>
  );
}
