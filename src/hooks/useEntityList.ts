import { useQuery, keepPreviousData } from "@tanstack/react-query";

interface EntityListParams {
  entity: string;
  limit?: number;
  offset?: number;
}

function useEntityList(params: EntityListParams) {
  return useQuery({
    enabled: !!params.entity,
    queryKey: ["entityList", params.entity, params.limit, params.offset],
    queryFn: async () => {
      const url = `https://pokeapi.co/api/v2/${params.entity}?limit=${
        params.limit ?? 10
      }&offset=${params.offset ?? 0}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching entity list: ${response.statusText}`);
      }
      return response.json();
    },
    staleTime: 300000, // 5 minutes
    placeholderData: keepPreviousData,
  });
}
export default useEntityList;
