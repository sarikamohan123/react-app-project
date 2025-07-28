import { Select, Group, Button } from "@mantine/core";
import useEntityList from "../hooks/useEntityList";
// import useEntityListOptions from "../hooks/useEntityListOptions.ts";

export interface OptionFormProps {
  entity: string;
  limit: number;
  page: number;
  setEntity: (value: string) => void;
  setLimit: (value: number) => void;
  setPage: (value: number | ((prev: number) => number)) => void;
}

export function OptionForm({
  entity,
  limit,
  page,
  setEntity,
  setLimit,
  setPage,
}: OptionFormProps) {
  // const { state, method } = useEntityListOptions();
  // const { entity, limit, page } = state;
  // const { setEntity, setLimit, setPage } = method;

  const { data } = useEntityList({
    entity,
    limit,
    offset: page * limit,
  });

  const pokemonEntities = [
    "ability",
    "berry",
    "berry-firmness",
    "berry-flavor",
    "characteristic",
    "contest-effect",
    "contest-type",
    "egg-group",
    "encounter-condition",
    "encounter-condition-value",
    "encounter-method",
    "evolution-chain",
    "evolution-trigger",
    "gender",
    "generation",
    "growth-rate",
    "item",
    "item-attribute",
    "item-category",
    "item-fling-effect",
    "item-pocket",
    "language",
    "location",
    "location-area",
    "machine",
    "move",
    "move-ailment",
    "move-battle-style",
    "move-category",
    "move-damage-class",
    "move-learn-method",
    "move-target",
    "nature",
    "pal-park-area",
    "pokeathlon-stat",
    "pokedex",
    "pokemon",
    "pokemon-color",
    "pokemon-form",
    "pokemon-habitat",
    "pokemon-shape",
    "pokemon-species",
    "region",
    "stat",
    "super-contest-effect",
    "type",
    "version",
    "version-group",
  ];
  const pageCount = data?.count ? Math.ceil(data.count / limit) : 1;
  return (
    <Group>
      <Select
        label="Entity"
        placeholder="Select entity"
        data={pokemonEntities}
        value={entity}
        onChange={(value) => value && setEntity(value)}
        w={250}
        searchable
      />

      <Select
        label="Per Page"
        placeholder="Select"
        data={["5", "10", "15", "20", "25", "50", "100"]}
        value={limit.toString()}
        onChange={(value) => value && setLimit(Number(value))}
        w={100}
      />

      <Button.Group>
        <Button onClick={() => setPage(0)} disabled={page === 0}>
          {"<<"}
        </Button>
        <Button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
        >
          {"<"}
        </Button>
        <Button
          onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
          disabled={page >= pageCount - 1}
        >
          {" >"}
        </Button>
        <Button
          onClick={() => setPage(pageCount - 1)}
          disabled={page >= pageCount - 1}
        >
          {" >>"}
        </Button>
      </Button.Group>
    </Group>
  );
}
export default OptionForm;
