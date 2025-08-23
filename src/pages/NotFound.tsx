import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export default function NotFound() {
  return (
    <Container size="md" p="md">
      <Title order={2} mb="xs">
        404- Not Found
      </Title>
      <Text mb="md">Page is not Found</Text>
      <Group>
        <Button component={Link}></Button>
      </Group>
    </Container>
  );
}
