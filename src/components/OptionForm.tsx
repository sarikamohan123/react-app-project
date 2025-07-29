import { Select, Group } from "@mantine/core";

export interface OptionFormProps {
  entity: string;
  limit: number;
  offset: number;
  setEntity: (value: string) => void;
  setLimit: (value: number) => void;
  setOffset: (value: number | ((prev: number) => number)) => void;
}

export function OptionForm({
  entity,
  limit,
  offset,
  setEntity,
  setLimit,
  setOffset,
}: OptionFormProps) {
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

  //TODO: logic to calculate current page, totalpages

  return (
    <Group>
      <Select
        label="Entity"
        placeholder="Select entity"
        data={pokemonEntities}
        value={entity}
        onChange={(value) => {
          if (value) {
            setEntity(value);
          }
        }}
        w={250}
        searchable
      />

      <Select
        label="Per Page"
        placeholder="Select"
        data={["5", "10", "15", "20", "25", "50", "100"]}
        value={limit.toString()}
        onChange={(value) => {
          if (value) {
            setLimit(Number(value));
          }
        }}
        w={100}
      />

      {/* <Button.Group>
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
      </Button.Group> */}
    </Group>
  );
}
export default OptionForm;
