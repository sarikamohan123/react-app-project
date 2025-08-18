import { useSearch, useNavigate } from "@tanstack/react-router";
import { indexRoute } from "../routes/index";

export default function useEntityListOptions() {
  // Get current search params from router  state
  const search = useSearch({ from: indexRoute.id }) as {
    entity?: string;
    limit?: number;
    offset?: number;
  };

  // Read params with fallback values
  const navigate = useNavigate({ from: indexRoute.id });

  const entity = search.entity ?? "pokemon";
  const limit = search.limit ?? 10;
  const offset = search.offset ?? 0;

  // define setters using navigate
  const setSearch = (patch: Partial<typeof search>) =>
    navigate({
      to: ".",
      search: (prev) => ({ ...prev, ...patch }),
    });

  const setEntity = (value: string) => {
    setSearch({ entity: value, offset: 0 });
  };

  const setLimit = (value: number) => {
    setSearch({ limit: value, offset: 0 });
  };

  const setOffset = (value: number) => {
    setSearch({ offset: value });
  };

  // const setLimit = (value: number) => {
  //   searchParams.set("limit", value.toString());
  //   searchParams.set("offset", "0");
  //   setSearchParams(searchParams);
  // };
  // const setOffset = (value: number) => {
  //   searchParams.set("offset", value.toString());
  //   setSearchParams(searchParams);
  // };

  //setters
  // const state = {
  //   entity,
  //   limit,
  //   offset,
  // };

  // const method = {
  //   setEntity,
  //   setLimit,
  //   setOffset,
  // };
  return {
    state: { entity, limit, offset },
    method: { setEntity, setLimit, setOffset },
  } as const;
}
