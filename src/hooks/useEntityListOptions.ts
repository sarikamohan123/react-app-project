import { useSearchParams } from "react-router-dom";

function useEntityListOptions() {
  const [searchParams, setSearchParams] = useSearchParams();

  const entity = searchParams.get("entity") ?? "pokemon";
  const limit = parseInt(searchParams.get("limit") ?? "10");
  const offset = parseInt(searchParams.get("offset") ?? "0");

  const setEntity = (value: string) => {
    searchParams.set("entity", value);
    searchParams.set("offset", "0");
    setSearchParams(searchParams);
  };

  const setLimit = (value: number) => {
    searchParams.set("limit", value.toString());
    searchParams.set("offset", "0");
    setSearchParams(searchParams);
  };

  const setOffset = (value: number) => {
    searchParams.set("Offset", value.toString());
    setSearchParams(searchParams);
  };

  //getters
  // const [entity, setEntity] = useState("pokemon");
  // const [limit, setLimit] = useState(10);
  // const [offset, setOffset] = useState(0);
  //setters
  const state = {
    entity,
    limit,
    offset,
  };

  const method = {
    setEntity,
    setLimit,
    setOffset,
  };
  return { state, method } as const;
}
export default useEntityListOptions;
