  import { AppShell, Burger,  Group, Title } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import OptionForm from './components/OptionForm';

  function App() {
    const [opened, { toggle }] = useDisclosure(false);

    return (
      <AppShell
      header ={{height:60,}}
      padding = "md"
      >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
          />
          <Title order={4}>PokeApi Table</Title>
        </Group>
        </AppShell.Header>
        <AppShell.Main>
          <OptionForm />
        </AppShell.Main>
        </AppShell>
    );
  }

  export default App;
