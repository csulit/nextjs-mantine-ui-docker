import { Button, Paper } from '@mantine/core';

export default function InitialConcernOptions() {
  return (
    <Paper shadow="xs" p="sm" radius="md" w="auto">
      <Button mb={10} size="xs" w="100%">
        Follow-Up
      </Button>
      <Button size="xs" w="100%">
        Talk to SD Agent
      </Button>
    </Paper>
  );
}
