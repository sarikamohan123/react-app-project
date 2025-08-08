import { Select, Group } from "@mantine/core";

export interface OptionFormProps {
  entity: string;
  limit: number;
  offset: number;
  totalCount: number;
  setEntity: (value: string) => void;
  setLimit: (value: number) => void;
  setOffset: (value: number) => void;
  // setOffset: (value: number | ((prev: number) => number)) => void;
}

export function OptionForm({
  entity,
  limit,
  offset,
  totalCount,
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

  //logic to calculate current page ,totalpages
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <Group align="flex-end" mb="md" wrap="wrap">
      <Select
        label="Entity"
        placeholder="Select entity"
        data={pokemonEntities}
        value={entity}
        // onChange={(value) => value && setEntity(value)}
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
        onChange={(value) => value && setLimit(Number(value))}
        w={100}
      />
      <Group>
        <button onClick={() => setOffset(0)} disabled={offset === 0}>
          {"<<"}
        </button>
        <button
          // onClick={() => setOffset((prev) => Math.max(0, prev - limit))}
          //updated onclick handler since  setOffset now expects a number ;not a function
          onClick={() => setOffset(Math.max(0, offset - limit))}
          disabled={offset === 0}
        >
          {"<"}
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setOffset(Math.min(offset + limit, (totalPages - 1) * limit))
          }
          disabled={currentPage >= totalPages}
        >
          {">"}
        </button>
        <button
          onClick={() => setOffset((totalPages - 1) * limit)}
          disabled={currentPage >= totalPages}
        >
          {">>"}
        </button>
      </Group>
    </Group>
  );
}
export default OptionForm;
