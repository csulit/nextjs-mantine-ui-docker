'use client';

import { Grid } from '@mantine/core';
import DashboardStats from '@/components/DashboardStats/DashboardStats';
import { SortableTable } from '@/components/SortableTable/SortableTable';

export default function AgentsPage() {
  return (
    <Grid my="md">
      <Grid.Col>
      <DashboardStats />
      </Grid.Col>

      <Grid.Col>
        <SortableTable />
      </Grid.Col>
    </Grid>
  );
}
