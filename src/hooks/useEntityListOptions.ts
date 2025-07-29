import { useState } from "react";

function useEntityListOptions() {
  //getters
  const [entity, setEntity] = useState("pokemon");
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
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
