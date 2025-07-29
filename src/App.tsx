import { AppShell, Burger, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import OptionForm from "./components/OptionForm";
import { ResponsiveTable } from "./components/Table/ResponsiveTable";
import useEntityTable from "./hooks/useEntityTable";
import useEntityList from "./hooks/useEntityList";
import useEntityListOptions from "./hooks/useEntityListOptions";

function App() {
  const [opened, { toggle }] = useDisclosure(false);
  //Destructuring  the custom hook to get entity list options
  const { state, method } = useEntityListOptions();
  const { entity, limit, offset } = state;
  const { setEntity, setLimit, setOffset } = method;
  //Query to fetch data from the API
  const { data } = useEntityList({ entity, limit, offset });
  const totalCount = data?.count ?? 0;

  //Using the custom hook to convert raw data into table format
  //This hook returns the rows and columns needed for the table
  const { rows, columns } = useEntityTable(data);

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Title order={4}>PokeApi Table</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <OptionForm
          entity={entity}
          limit={limit}
          offset={offset}
          totalCount={totalCount}
          setEntity={setEntity}
          setLimit={setLimit}
          setOffset={setOffset}
        />
        <ResponsiveTable data={rows} columns={columns} />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
