'use client';

import { Card, Flex, Title } from '@mantine/core';
import { SortableTable } from '@/components/SortableTable/SortableTable';

export default function ChatPage() {
  return (
    <Flex direction="column" gap="md">
      <Title order={2}>Chats</Title>
      <Card bg="white" p="md">
        <SortableTable />
      </Card>
    </Flex>
  );
}
