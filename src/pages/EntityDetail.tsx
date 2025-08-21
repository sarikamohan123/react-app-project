import { useParams } from "@tanstack/react-router";
import type { DetailsParams } from "../routes/detail-params";
import { useQuery } from "@tanstack/react-query";
import { Container, Title, Loader, Center, Alert, Code } from "@mantine/core";
import PokemonDetail from "../components/details/PokemonDetail";

//  const Details_Route_Id = "/$entity/$id" as const;

export default function EntityDetail() {
  const { entity, id } = useParams({
    from: "/$entity/$id" as const,
  }) as DetailsParams;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["entityDetail", entity, id],
    queryFn: async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/${entity}/${id}`);
      if (!response.ok)
        throw new Error(
          `Fetched failed : ${response.status} ${response.statusText}`
        );
      return response.json();
    },
    staleTime: 60_000,
  });
  if (isLoading) {
    return (
      <Container size="md" p="md">
        <Center mih={200}>
          <Loader />
        </Center>
      </Container>
    );
  }
  if (isError) {
    return (
      <Container size="md" p="md">
        <Alert color="red" title="Failed to Load">
          {(error as Error).message}
        </Alert>
      </Container>
    );
  }
  //   return (
  //     <Container size="md" p="md">
  //         { entity === "pokemon" ?(
  //         <PokemonDetail data={data} />
  //         ): {}}
  //       <Title order={2} mb="sm">
  //         {entity} #{id}
  //       </Title>
  //       <Code block>{JSON.stringify(data, null, 2)}</Code>
  //     </Container>
  //   );
  // }
  return (
    <Container size="lg" p="md">
      {entity === "pokemon" ? (
        <PokemonDetail data={data} />
      ) : (
        <>
          <Title order={2} mb="sm">
            {entity} #{id}
          </Title>
          <Code block>{JSON.stringify(data, null, 2)}</Code>
        </>
      )}
    </Container>
  );
}
