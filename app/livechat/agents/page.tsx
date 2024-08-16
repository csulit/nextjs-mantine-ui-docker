'use client';

import { Card, Flex, Title } from '@mantine/core';
import DashboardStats from '@/components/DashboardStats/DashboardStats';
import { SortableTable } from '@/components/SortableTable/SortableTable';

export default function AgentsPage() {
  return (
    <Flex direction="column" gap="md">
      <Title order={2}>Agents</Title>
      <DashboardStats />
      <Card>
        <SortableTable />
      </Card>
    </Flex>
  );
}
