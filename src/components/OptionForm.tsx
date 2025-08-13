import { Select, Group, ActionIcon, Tooltip } from "@mantine/core";
import {
  IconChevronsLeft,
  IconChevronLeft,
  IconChevronsRight,
  IconChevronRight,
} from "@tabler/icons-react";

export interface OptionFormProps {
  entity: string;
  limit: number;
  offset: number;
  totalCount: number;
  setEntity: (value: string) => void;
  setLimit: (value: number) => void;
  setOffset: (value: number) => void;
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
      <Group gap="sm">
        <Tooltip label="First">
          <ActionIcon
            aria-label="First Page"
            variant="light"
            size="lg"
            radius="md"
            disabled={offset === 0}
            onClick={() => setOffset(0)}
          >
            <IconChevronsLeft />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="Previous">
          <ActionIcon
            aria-label="Previous Page"
            variant="light"
            size="lg"
            radius="md"
            disabled={offset === 0}
            onClick={() => setOffset(Math.max(0, offset - limit))}
          >
            <IconChevronLeft />
          </ActionIcon>
        </Tooltip>

        <span>
          {currentPage} of {totalPages}
        </span>

        <Tooltip label="Next">
          <ActionIcon
            aria-label="Next Page"
            variant="light"
            size="lg"
            radius="md"
            disabled={currentPage >= totalPages}
            onClick={() =>
              setOffset(Math.min(offset + limit, (totalPages - 1) * limit))
            }
          >
            <IconChevronRight />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Last">
          <ActionIcon
            aria-label="Last Page"
            variant="light"
            size="lg"
            radius="md"
            disabled={currentPage >= totalPages}
            onClick={() => setOffset((totalPages - 1) * limit)}
          >
            <IconChevronsRight />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Group>
  );
}
export default OptionForm;
