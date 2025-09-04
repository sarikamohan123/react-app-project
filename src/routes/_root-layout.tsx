import { Outlet } from "@tanstack/react-router";
import { AppShell, Group, Title } from "@mantine/core";

export function RootLayout() {
  return (
    <AppShell header={{ height: 60 }} padding="md" style={{ height: "100vh" }}>
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Title order={4}>PokeApi Table</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Main
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          height: "100%",
        }}
      >
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
