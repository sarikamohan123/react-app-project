import { useParams } from "@tanstack/react-router";
import type { DetailsParams } from "../routes/detail-params";
import { useQuery } from "@tanstack/react-query";
import { Container, Title, Alert, Code } from "@mantine/core";
import PokemonDetail from "../components/details/pokemon/PokemonDetail";
import { Link } from "@tanstack/react-router";

export default function EntityDetail() {
  const { entity, id } = useParams({
    from: "/$entity/$id" as const,
  }) as DetailsParams;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["entityDetail", entity, id],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await fetch(`https://pokeapi.co/api/v2/${entity}/${id}`);
      if (!response.ok)
        throw new Error(
          `Fetched failed : ${response.status} ${response.statusText}`
        );
      return response.json();
    },
    staleTime: 60_000,
  });
  const backLink = (
    <Link
      to="/"
      style={{
        display: "inline-block",
        marginBottom: "1rem",
        color: "#1c7ed6",
      }}
    >
      Back to List
    </Link>
  );

  if (isError) {
    return (
      <Container size="md" p="md">
        {backLink}
        <Alert color="red" title="Failed to Load">
          {(error as Error).message}
        </Alert>
      </Container>
    );
  }

  return (
    <Container size="lg" p="md">
      {backLink}
      {entity === "pokemon" ? (
        <PokemonDetail data={data} isLoading={isLoading} />
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
